# hair salon Élise — Brand Guideline

FV（Header / Hero）だけでなく、今後追加する Menu / Staff / FAQ / Access / Footer / Form / Reservation Flow でもデザインの世界観が崩れないよう、カラーと基本ルールを共通化するための基準です。

---

## カラーパレット（CSS変数）

`app/globals.css` の `:root` で定義しています。

| 変数 | 値 | 用途 |
|---|---|---|
| `--color-primary` | `#3A3A36` | ロゴ、見出し、ナビ、本文 |
| `--color-secondary` | `#EEEAE4` | セクション背景 |
| `--color-tertiary` | `#D8D2CA` | 枠線、区切り線 |
| `--color-neutral` | `#FAF9F6` | ページ背景、Hero下部カーブ |
| `--color-accent` | `#9A8066` | 予約ボタン、リンクアクセント |
| `--color-accent-hover` | `#8B725A` | 予約ボタン hover |
| `--color-accent-light` | `#C8B7A3` | 淡いアクセント（バッジ・装飾など） |
| `--color-subtext` | `#777169` | 説明文、補足文 |
| `--color-card` | `#FFFFFF` | カード背景、ボタン文字 |

### シャドウ

| 変数 | 値 | 用途 |
|---|---|---|
| `--shadow-soft` | `0 12px 30px rgba(58, 58, 54, 0.08)` | カード、モーダル |
| `--shadow-button` | `0 8px 18px rgba(154, 128, 102, 0.25)` | 予約ボタン |

---

## 使用ルール

- **ロゴ・見出し・ナビ** → `var(--color-primary)`
- **説明文・補足文** → `var(--color-subtext)`
- **ページ背景** → `var(--color-neutral)`
- **セクション背景** → `var(--color-secondary)`
- **枠線** → `var(--color-tertiary)`
- **予約ボタン** → `var(--color-accent)` + `.btn-accent` クラス
- **予約ボタン hover** → `var(--color-accent-hover)`
- **カード背景** → `var(--color-card)`
- **Hero下部カーブ** → `var(--color-neutral)`

---

## 共通コンポーネントクラス

### Header（`.header-glass`）

```css
background: rgba(250, 249, 246, 0.86);
backdrop-filter: blur(6px);
```

Hero 画像の上に重ねる Header は、半透明の生成り背景 + ぼかしで可読性を確保します。

### 予約ボタン（`.btn-accent`）

```css
background-color: var(--color-accent);
color: var(--color-card);
box-shadow: var(--shadow-button);
```

hover 時は `var(--color-accent-hover)` に切り替わります。

---

## タイポグラフィ

| 用途 | フォント |
|---|---|
| 見出し（英語） | Cormorant Garamond（`font-serif`） |
| 本文・UI | Noto Sans JP（`font-sans` / body デフォルト） |

---

## デザインの方向性

- **色調**：白・グレージュ・淡いブラウン・チャコールを基調
- **形状**：直線的にしすぎず、上品でやわらかい美容室サイト
- **Hero**：左にテキスト、右に店内写真。左側はグラデーションで文字可読性を確保
- **セクション間**：SVG カーブなどで柔らかくつなぐ

---

## Tailwind 連携

`@theme inline` に `--color-elise-*` として登録済みです。Tailwind ユーティリティとして `text-elise-primary` なども利用可能です。

---

## 今後のセクション実装時のチェックリスト

- [ ] ハードコード色（`#XXXXXX`）を使わず CSS 変数を優先する
- [ ] 予約ボタンは `.btn-accent` を使う
- [ ] セクション背景は `--color-secondary`、ページ背景は `--color-neutral`
- [ ] カードは `--color-card` + `--shadow-soft`
- [ ] 枠線・区切りは `--color-tertiary`
