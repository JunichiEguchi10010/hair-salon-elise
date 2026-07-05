export type MenuIconType = "scissors" | "brush" | "drop" | "bottle";

/** Supabase menus テーブル置き換え用フィールド構成 */
export type MenuItem = {
  name: string;
  nameJa: string;
  description: string;
  duration: string;
  price: string;
  icon: MenuIconType;
};

export const menuItems: MenuItem[] = [
  {
    name: "Cut",
    nameJa: "カット",
    description: "似合わせを大切にしたデザインカット。",
    duration: "60 min",
    price: "¥6,600",
    icon: "scissors",
  },
  {
    name: "Color & Care",
    nameJa: "カラー",
    description: "透明感のあるカラーとうるおいケア。",
    duration: "120 min",
    price: "¥12,100〜",
    icon: "brush",
  },
  {
    name: "Shampoo & Spa",
    nameJa: "シャンプー & スパ",
    description: "頭皮をほぐし、心も軽くなるケア。",
    duration: "45 min",
    price: "¥4,950",
    icon: "drop",
  },
  {
    name: "Treatment",
    nameJa: "トリートメント",
    description: "髪の芯からうるおう集中トリートメント。",
    duration: "60 min",
    price: "¥6,050〜",
    icon: "bottle",
  },
];
