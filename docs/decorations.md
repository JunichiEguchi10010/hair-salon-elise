# Decorations

HAIR SALON ÉLISE の枝葉装飾は、背景装飾として扱う。  
情報ではないため `aria-hidden` とし、クリックの邪魔をしないよう `pointer-events-none` を付ける。

管理データは `lib/decorations.ts`、描画コンポーネントは `components/decorations/LeafDecorationImage.tsx` を使用する。

## Leaf Decorations

| ID | 管理名 | ファイル | 使用箇所 | 役割 | 透過PNG | 推奨 opacity | 状態 |
|---|---|---|---|---|---|---|---|
| `concept-leaf-hero-bridge` | `conceptLeafHeroBridge` | `leaf-hero-concept-transparent.png` | ConceptSection | Hero → Concept 境目 | はい | 0.18〜0.22 | 使用中 |
| `concept-leaf-menu-bridge` | `conceptLeafMenuBridge` | `leaf-concept-menu-transparent.png` | ConceptSection | Concept → Menu 境目 | はい | 0.22〜0.26 | 使用中 |
| `faq-leaf-access-bridge` | `faqLeafAccessBridge` | `leaf-faq-access-transparent.png` | FAQSection | FAQ → Access 境目 | はい | 0.18〜0.24 | 予定 |
| `instagram-leaf-footer-bridge` | `instagramLeafFooterBridge` | `leaf-instagram-footer-transparent.png` | InstagramSection | Instagram → Footer 境目 | はい | 0.18〜0.24 | 予定 |
| `footer-leaf-accent` | `footerLeafAccent` | `leaf-footer-accent-transparent.png` | Footer | 右下の余韻 | はい | 0.16〜0.20 | 予定 |

## 画像ファイルの置き場所

```
public/images/elise/decorations/
├── leaf-hero-concept-transparent.png      # 使用中
├── leaf-concept-menu-transparent.png      # 使用中
├── leaf-faq-access-transparent.png        # 予定
├── leaf-instagram-footer-transparent.png  # 予定
├── leaf-footer-accent-transparent.png     # 予定
└── originals/                             # バックアップ用
```

## Rules

- opacity は **0.18〜0.32** を基本にする
- PC 中心。スマホでは原則 `hidden md:block`
- テキスト・カード・CTA に重ねない
- セクション境目にまたがる場合は `translate-y` で調整する
- `status: "planned"` の装飾は PNG 未配置のため **描画しない**
- PNG 実体は透過 RGBA を推奨（白背景 JPEG を `.png` 拡張子で置かない）
- DevTools 識別用に `data-decoration-id` / `data-decoration-name` / `data-decoration-role` を付与する

## セクションへの追加手順

1. `public/images/elise/decorations/` に透過 PNG を配置する
2. `lib/decorations.ts` の該当エントリの `status` を `"active"` に変更する
3. 対象セクションで `conceptSectionLeafDecorations` と同様の配列を定義し、`LeafDecorationImage` で map 描画する
4. このドキュメントの一覧表を更新する

## 注意点

- 装飾の `z-index` は本文（通常 `z-10`）より後ろ、ただし境目ではみ出し先セクション上に見えるよう調整する
- 横長 PNG を縦長 `width` / `height` で指定すると、枝葉本体がコンテンツ背面に隠れやすい
- `-scale-x-100` は位置ずれの原因になりやすい。必要時のみ使用する
