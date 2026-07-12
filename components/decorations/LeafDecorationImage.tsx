import Image from "next/image";
import type { LeafDecoration } from "@/lib/decorations";

type LeafDecorationImageProps = {
  decoration: LeafDecoration;
};

export function LeafDecorationImage({ decoration }: LeafDecorationImageProps) {
  return (
    <div
      data-decoration-id={decoration.id}
      data-decoration-name={decoration.name}
      data-decoration-role={decoration.role}
      aria-hidden="true"
      className={decoration.wrapperClassName}
    >
      <Image
        src={decoration.src}
        alt=""
        width={decoration.width}
        height={decoration.height}
        className={decoration.imageClassName ?? "h-auto w-auto"}
      />
    </div>
  );
}
