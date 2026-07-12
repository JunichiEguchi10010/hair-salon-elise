/** Supabase menus テーブル置き換え用フィールド構成 */
export type MenuEntry = {
  nameJa: string;
  description: string;
  duration: string;
  price: string;
};

export type MenuCategory = {
  labelEn: string;
  labelJa: string;
  /** false のとき英字ラベルを大文字化しない（例: Spa） */
  labelUppercase?: boolean;
  items: MenuEntry[];
};

export const menuCategories: MenuCategory[] = [
  {
    labelEn: "Cut",
    labelJa: "カット",
    items: [
      {
        nameJa: "カット",
        description: "骨格や髪質に合わせた似合わせカット",
        duration: "60分",
        price: "¥6,050",
      },
    ],
  },
  {
    labelEn: "Color & Care",
    labelJa: "カラー",
    items: [
      {
        nameJa: "カラー",
        description: "透明感のあるツヤカラー",
        duration: "90分",
        price: "¥8,800〜",
      },
    ],
  },
  {
    labelEn: "Treatment",
    labelJa: "トリートメント",
    items: [
      {
        nameJa: "トリートメント",
        description: "髪の内部から整えるうるツヤケア",
        duration: "60分",
        price: "¥5,500〜",
      },
    ],
  },
  {
    labelEn: "Spa",
    labelJa: "ヘッドスパ",
    labelUppercase: false,
    items: [
      {
        nameJa: "ヘッドスパ",
        description: "頭皮をほぐす贅沢なリラックス時間",
        duration: "45分",
        price: "¥6,600〜",
      },
    ],
  },
];
