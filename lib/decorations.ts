export type LeafDecorationStatus = "active" | "planned";

export type LeafDecoration = {
  id: string;
  name: string;
  role: string;
  src: string;
  width: number;
  height: number;
  wrapperClassName: string;
  imageClassName?: string;
  /** 配置先セクション（参照用） */
  section: string;
  status: LeafDecorationStatus;
};

export const leafDecorations = {
  conceptLeafHeroBridge: {
    id: "concept-leaf-hero-bridge",
    name: "conceptLeafHeroBridge",
    role: "Hero → Concept 境目の枝葉装飾",
    src: "/images/elise/decorations/leaf-hero-concept-transparent.png",
    width: 260,
    height: 480,
    wrapperClassName:
      "pointer-events-none absolute -right-12 -top-28 z-0 hidden opacity-[0.20] md:block lg:-right-10 lg:-top-32",
    imageClassName: "h-auto w-auto",
    section: "ConceptSection",
    status: "active",
  },

  conceptLeafMenuBridge: {
    id: "concept-leaf-menu-bridge",
    name: "conceptLeafMenuBridge",
    role: "Concept → Menu 境目の枝葉装飾",
    src: "/images/elise/decorations/leaf-concept-menu-transparent.png",
    width: 240,
    height: 160,
    wrapperClassName:
      "pointer-events-none absolute right-8 bottom-0 z-[1] hidden translate-y-[58%] opacity-[0.50] md:block lg:right-10",
    imageClassName: "h-auto w-auto -scale-x-100",
    section: "ConceptSection",
    status: "active",
  },

  faqLeafAccessBridge: {
    id: "faq-leaf-access-bridge",
    name: "faqLeafAccessBridge",
    role: "FAQ → Access 境目の枝葉装飾",
    src: "/images/elise/decorations/leaf-faq-access-transparent.png",
    width: 240,
    height: 360,
    wrapperClassName:
      "pointer-events-none absolute -right-10 bottom-0 z-[1] hidden translate-y-1/2 opacity-[0.22] md:block",
    imageClassName: "h-auto w-auto",
    section: "FAQSection",
    status: "planned",
  },

  instagramLeafFooterBridge: {
    id: "instagram-leaf-footer-bridge",
    name: "instagramLeafFooterBridge",
    role: "Instagram → Footer 境目の枝葉装飾",
    src: "/images/elise/decorations/leaf-instagram-footer-transparent.png",
    width: 280,
    height: 220,
    wrapperClassName:
      "pointer-events-none absolute right-8 bottom-0 z-[1] hidden translate-y-1/2 opacity-[0.22] md:block",
    imageClassName: "h-auto w-auto",
    section: "InstagramSection",
    status: "planned",
  },

  footerLeafAccent: {
    id: "footer-leaf-accent",
    name: "footerLeafAccent",
    role: "Footer 右下の余韻用枝葉装飾",
    src: "/images/elise/decorations/leaf-footer-accent-transparent.png",
    width: 220,
    height: 320,
    wrapperClassName:
      "pointer-events-none absolute -right-8 bottom-8 z-0 hidden opacity-[0.18] md:block",
    imageClassName: "h-auto w-auto",
    section: "Footer",
    status: "planned",
  },
} as const satisfies Record<string, LeafDecoration>;

/** 実ファイル配置済み・描画可能な装飾のみ */
export function getActiveLeafDecorations(
  decorations: readonly LeafDecoration[],
): LeafDecoration[] {
  return decorations.filter((decoration) => decoration.status === "active");
}

/** ConceptSection で使用する枝葉装飾 */
export const conceptSectionLeafDecorations = getActiveLeafDecorations([
  leafDecorations.conceptLeafHeroBridge,
  leafDecorations.conceptLeafMenuBridge,
]);
