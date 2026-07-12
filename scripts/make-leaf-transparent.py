"""Remove cream background from leaf decoration images using corner flood-fill."""

from __future__ import annotations

import math
from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


def sample_background(img: Image.Image, sample: int = 8) -> tuple[int, int, int]:
    w, h = img.size
    points: list[tuple[int, int, int]] = []
    corners = [(0, 0), (w - sample, 0), (0, h - sample), (w - sample, h - sample)]
    for cx, cy in corners:
        for dy in range(sample):
            for dx in range(sample):
                x = min(cx + dx, w - 1)
                y = min(cy + dy, h - 1)
                points.append(img.getpixel((x, y))[:3])
    return tuple(sum(channel) // len(points) for channel in zip(*points, strict=True))


def color_distance(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b, strict=True)))


def flood_background_mask(
    rgb: Image.Image,
    bg: tuple[int, int, int],
    tolerance: float,
) -> list[list[bool]]:
    w, h = rgb.size
    pixels = rgb.load()
    visited = [[False] * w for _ in range(h)]
    background = [[False] * w for _ in range(h)]
    queue: deque[tuple[int, int]] = deque()

    for x, y in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if not visited[y][x]:
            visited[y][x] = True
            queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        pixel = pixels[x, y][:3]
        if color_distance(pixel, bg) <= tolerance:
            background[y][x] = True
            for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
                if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                    visited[ny][nx] = True
                    queue.append((nx, ny))

    return background


def remove_background(
    src: Path,
    dst: Path,
    *,
    tolerance: float = 24.0,
    edge_feather: float = 42.0,
) -> dict:
    rgb = Image.open(src).convert("RGB")
    bg = sample_background(rgb)
    w, h = rgb.size
    pixels = rgb.load()
    background = flood_background_mask(rgb, bg, tolerance)

    rgba = Image.new("RGBA", (w, h))
    out = rgba.load()

    transparent = 0
    opaque = 0
    partial = 0

    for y in range(h):
        for x in range(w):
            r, g, b = pixels[x, y]
            if background[y][x]:
                alpha = 0
                transparent += 1
            else:
                dist = color_distance((r, g, b), bg)
                if dist >= tolerance + edge_feather:
                    alpha = 255
                    opaque += 1
                else:
                    alpha = max(0, int(255 * (dist - tolerance) / edge_feather))
                    partial += 1
                # Foreground pixels should stay visible even when pale.
                if dist >= 14:
                    alpha = max(alpha, 110)
                elif dist >= 6:
                    alpha = max(alpha, 48)
            out[x, y] = (r, g, b, alpha)

    # Soften alpha edges to reduce JPEG fringe.
    alpha = rgba.split()[3].filter(ImageFilter.GaussianBlur(radius=0.6))
    rgba.putalpha(alpha)

    dst.parent.mkdir(parents=True, exist_ok=True)
    rgba.save(dst, "PNG", optimize=True)

    final = rgba.load()
    corners = [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]
    corner_alpha = [final[c][3] for c in corners]

    return {
        "src": str(src),
        "dst": str(dst),
        "size": rgba.size,
        "mode": rgba.mode,
        "bg": bg,
        "tolerance": tolerance,
        "edge_feather": edge_feather,
        "corner_alpha": corner_alpha,
        "opaque": opaque,
        "transparent": transparent,
        "partial": partial,
        "total": w * h,
        "head_hex": dst.read_bytes()[:8].hex(),
        "file_size": dst.stat().st_size,
    }


def main() -> None:
    root = Path("public/images/elise/decorations")
    jobs = [
        ("leaf-hero-concept.png", "leaf-hero-concept-transparent.png"),
        ("leaf-concept-menu.png", "leaf-concept-menu-transparent.png"),
    ]

    for src_name, dst_name in jobs:
        info = remove_background(root / src_name, root / dst_name)
        print(f"=== {dst_name} ===")
        for key, value in info.items():
            print(f"{key}: {value}")


if __name__ == "__main__":
    main()
