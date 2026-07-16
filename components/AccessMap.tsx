"use client";

import { useEffect, useRef, useState } from "react";
import {
  ELISE_MAP_CENTER,
  ELISE_MAP_ZOOM,
  eliseMapStyles,
} from "@/lib/elise-map-styles";

const MAP_QUERY = "東京都世田谷区深沢3-13-12";
const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=ja&z=16&output=embed`;
const OPEN_MAP_HREF = `https://www.google.com/maps?q=${ELISE_MAP_CENTER.lat},${ELISE_MAP_CENTER.lng}`;
const PIN_ICON_URL = "/icons/elise-pin.png";
const PIN_ICON_URL_2X = "/icons/elise-pin@2x.png";
/** Marker 表示サイズ（SVG viewBox 128 正方形に合わせる） */
const PIN_DISPLAY_SIZE = 32;
const CALLBACK_NAME = "__eliseGoogleMapsInit";

type GoogleMapInstance = {
  setOptions: (opts: { styles: object[] }) => void;
};

type MapConstructor = new (
  el: HTMLElement,
  opts: Record<string, unknown>,
) => GoogleMapInstance;

type MarkerConstructor = new (opts: Record<string, unknown>) => unknown;

type SizeConstructor = new (width: number, height: number) => unknown;
type PointConstructor = new (x: number, y: number) => unknown;

type OverlayViewInstance = {
  setMap: (map: GoogleMapInstance | null) => void;
  getPanes: () => {
    floatPane?: HTMLElement;
    overlayLayer?: HTMLElement;
    overlayMouseTarget?: HTMLElement;
  } | null;
  getProjection: () => {
    fromLatLngToDivPixel: (
      latLng: unknown,
    ) => { x: number; y: number } | null;
  } | null;
};

type OverlayViewConstructor = new () => OverlayViewInstance & {
  onAdd?: () => void;
  draw?: () => void;
  onRemove?: () => void;
};

type GoogleMapsNamespace = {
  maps: {
    Map?: MapConstructor;
    Marker?: MarkerConstructor;
    Size?: SizeConstructor;
    Point?: PointConstructor;
    LatLng?: new (lat: number, lng: number) => unknown;
    OverlayView?: OverlayViewConstructor;
    importLibrary?: (name: string) => Promise<Record<string, unknown>>;
  };
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
    [CALLBACK_NAME]?: () => void;
  }
}

function injectMapsScript(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-elise-google-maps]",
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Google Maps script error")),
      );
      if (window.google?.maps) resolve();
      return;
    }

    window[CALLBACK_NAME] = () => resolve();

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&language=ja&v=weekly&callback=${CALLBACK_NAME}`;
    script.async = true;
    script.defer = true;
    script.dataset.eliseGoogleMaps = "true";
    script.onerror = () => reject(new Error("Google Maps script error"));
    document.head.appendChild(script);
  });
}

async function loadMapsLibrary(): Promise<{
  Map: MapConstructor;
  Marker: MarkerConstructor;
  Size: SizeConstructor;
  Point: PointConstructor;
  LatLng: new (lat: number, lng: number) => unknown;
  OverlayView: OverlayViewConstructor;
}> {
  const google = window.google;
  if (!google?.maps) {
    throw new Error("google.maps is unavailable");
  }

  if (typeof google.maps.importLibrary === "function") {
    const mapsLib = (await google.maps.importLibrary("maps")) as {
      Map?: MapConstructor;
      OverlayView?: OverlayViewConstructor;
      Size?: SizeConstructor;
      Point?: PointConstructor;
      LatLng?: new (lat: number, lng: number) => unknown;
    };

    const Map = mapsLib.Map ?? google.maps.Map;
    const Marker = google.maps.Marker;
    const Size = mapsLib.Size ?? google.maps.Size;
    const Point = mapsLib.Point ?? google.maps.Point;
    const LatLng = mapsLib.LatLng ?? google.maps.LatLng;
    const OverlayView = mapsLib.OverlayView ?? google.maps.OverlayView;

    if (typeof Map !== "function") {
      throw new Error("google.maps.Map is not a constructor");
    }
    if (typeof Marker !== "function") {
      throw new Error("google.maps.Marker is unavailable");
    }
    if (typeof Size !== "function" || typeof Point !== "function") {
      throw new Error("google.maps.Size / Point is unavailable");
    }
    if (typeof LatLng !== "function") {
      throw new Error("google.maps.LatLng is unavailable");
    }
    if (typeof OverlayView !== "function") {
      throw new Error("google.maps.OverlayView is unavailable");
    }

    return { Map, Marker, Size, Point, LatLng, OverlayView };
  }

  if (typeof google.maps.Map !== "function") {
    throw new Error("google.maps.Map is not a constructor");
  }
  if (typeof google.maps.Marker !== "function") {
    throw new Error("google.maps.Marker is unavailable");
  }
  if (
    typeof google.maps.Size !== "function" ||
    typeof google.maps.Point !== "function"
  ) {
    throw new Error("google.maps.Size / Point is unavailable");
  }
  if (typeof google.maps.LatLng !== "function") {
    throw new Error("google.maps.LatLng is unavailable");
  }
  if (typeof google.maps.OverlayView !== "function") {
    throw new Error("google.maps.OverlayView is unavailable");
  }

  return {
    Map: google.maps.Map,
    Marker: google.maps.Marker,
    Size: google.maps.Size,
    Point: google.maps.Point,
    LatLng: google.maps.LatLng,
    OverlayView: google.maps.OverlayView,
  };
}

/** ピン右横のミニマル店名ラベル */
function attachEliseLabel(
  OverlayView: OverlayViewConstructor,
  LatLng: new (lat: number, lng: number) => unknown,
  map: GoogleMapInstance,
  position: { lat: number; lng: number },
): OverlayViewInstance {
  const overlay = new OverlayView();
  let root: HTMLDivElement | null = null;

  overlay.onAdd = () => {
    root = document.createElement("div");
    root.textContent = "ÉLISE";
    root.setAttribute("aria-hidden", "true");
    Object.assign(root.style, {
      position: "absolute",
      fontSize: "11px",
      color: "var(--color-primary)",
      fontWeight: "400",
      background: "transparent",
      padding: "0",
      border: "none",
      boxShadow: "none",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      letterSpacing: "0.02em",
      lineHeight: "1",
      // ピン右端からの余白（先端座標 + 半幅 + 6px）
      marginLeft: `${PIN_DISPLAY_SIZE / 2 + 6}px`,
    });
    overlay.getPanes()?.overlayLayer?.appendChild(root);
  };

  overlay.draw = () => {
    if (!root) return;
    const projection = overlay.getProjection();
    if (!projection) return;
    const pos = projection.fromLatLngToDivPixel(
      new LatLng(position.lat, position.lng),
    );
    if (!pos) return;
    root.style.left = `${pos.x}px`;
    // ピン本体（白円付近）の高さに合わせる
    root.style.top = `${pos.y - PIN_DISPLAY_SIZE * 0.55}px`;
  };

  overlay.onRemove = () => {
    root?.remove();
    root = null;
  };

  overlay.setMap(map);
  return overlay;
}

/** 左上の「マップで開く」ボタン（ズーム＋−と同テイスト） */
function attachOpenMapButton(
  OverlayView: OverlayViewConstructor,
  map: GoogleMapInstance,
  host: HTMLElement,
): OverlayViewInstance {
  const overlay = new OverlayView();
  let button: HTMLButtonElement | null = null;

  overlay.onAdd = () => {
    button = document.createElement("button");
    button.type = "button";
    button.textContent = "マップで開く";
    Object.assign(button.style, {
      position: "absolute",
      top: "12px",
      left: "12px",
      zIndex: "1000",
      width: "80px",
      height: "32px",
      padding: "0",
      background: "#ffffff",
      border: "1px solid #d9d9d9",
      borderRadius: "0",
      boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "400",
      color: "var(--color-primary)",
      lineHeight: "1",
      letterSpacing: "0.01em",
    });

    button.onmouseenter = () => {
      if (button) button.style.background = "#f7f7f7";
    };
    button.onmouseleave = () => {
      if (button) button.style.background = "#ffffff";
    };
    button.onclick = () => {
      window.open(OPEN_MAP_HREF, "_blank", "noopener,noreferrer");
    };

    host.appendChild(button);
  };

  overlay.draw = () => {};

  overlay.onRemove = () => {
    button?.remove();
    button = null;
  };

  overlay.setMap(map);
  return overlay;
}

function waitForElement(
  getEl: () => HTMLDivElement | null,
  attempts = 12,
): Promise<HTMLDivElement> {
  return new Promise((resolve, reject) => {
    const tryGet = (left: number) => {
      const el = getEl();
      if (el) {
        resolve(el);
        return;
      }
      if (left <= 0) {
        reject(new Error("Map container not ready"));
        return;
      }
      window.requestAnimationFrame(() => tryGet(left - 1));
    };
    tryGet(attempts);
  });
}

/** API キー未設定時のみ使用する iframe フォールバック */
function MutedEmbedFallback() {
  return (
    <div className="elise-map-muted absolute inset-0" data-map-mode="fallback">
      <iframe
        title="ÉLISE 周辺マップ（東京都世田谷区深沢 3-13-12）"
        src={MAP_EMBED_SRC}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="elise-map-muted-veil" aria-hidden="true" />
    </div>
  );
}

/**
 * HAIR SALON ÉLISE 向け淡色マップ。
 * - mapId なしで styles + ブランド色しずくピンを維持
 * - iframe フォールバックは API キー未設定時のみ
 */
export default function AccessMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";
  const hasApiKey = apiKey.length > 0;
  const [useFallback] = useState(!hasApiKey);

  useEffect(() => {
    if (!hasApiKey) return;

    let cancelled = false;
    const overlaysRef: {
      openMap: OverlayViewInstance | null;
      label: OverlayViewInstance | null;
    } = { openMap: null, label: null };

    const center = {
      lat: ELISE_MAP_CENTER.lat,
      lng: ELISE_MAP_CENTER.lng,
    };

    waitForElement(() => containerRef.current)
      .then(async (el) => {
        await injectMapsScript(apiKey);
        if (cancelled) return;

        const { Map, Marker, Size, Point, LatLng, OverlayView } =
          await loadMapsLibrary();
        if (cancelled) return;

        const map = new Map(el, {
          center,
          zoom: ELISE_MAP_ZOOM,
          mapTypeId: "roadmap",
          styles: eliseMapStyles,
          mapTypeControl: false,
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: true,
          clickableIcons: false,
          gestureHandling: "cooperative",
        });

        map.setOptions({ styles: eliseMapStyles });

        new Marker({
          map,
          position: center,
          title: "ÉLISE",
          icon: {
            url:
              window.devicePixelRatio >= 2 ? PIN_ICON_URL_2X : PIN_ICON_URL,
            scaledSize: new Size(PIN_DISPLAY_SIZE, PIN_DISPLAY_SIZE),
            // しずく先端（viewBox y≈120）を座標に合わせる
            anchor: new Point(PIN_DISPLAY_SIZE / 2, PIN_DISPLAY_SIZE),
          },
        });

        overlaysRef.label = attachEliseLabel(
          OverlayView,
          LatLng,
          map,
          center,
        );

        overlaysRef.openMap = attachOpenMapButton(
          OverlayView,
          map,
          el.parentElement ?? el,
        );
      })
      .catch((error) => {
        console.error(
          "[AccessMap] Maps JavaScript API の初期化に失敗しました",
          error,
        );
      });

    return () => {
      cancelled = true;
      overlaysRef.label?.setMap(null);
      overlaysRef.openMap?.setMap(null);
    };
  }, [apiKey, hasApiKey]);

  if (useFallback) {
    return (
      <div className="relative h-[280px] w-full overflow-hidden bg-[var(--color-secondary)] md:h-[360px] lg:h-[400px]">
        <MutedEmbedFallback />
      </div>
    );
  }

  return (
    <div className="relative h-[280px] w-full overflow-hidden bg-[var(--color-secondary)] md:h-[360px] lg:h-[400px]">
      <div
        ref={containerRef}
        data-map-mode="js"
        role="region"
        aria-label="ÉLISE 周辺マップ（東京都世田谷区深沢 3-13-12）"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
