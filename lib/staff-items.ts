/** Supabase staff テーブル置き換え用フィールド構成 */
export type StaffItem = {
  name: string;
  nameJa: string;
  role: string;
  description: string;
  imageSrc: string;
};

export const staffItems: StaffItem[] = [
  {
    name: "Ryo Sato",
    nameJa: "佐藤 亮",
    role: "Owner / Stylist",
    description:
      "大人の魅力やライフスタイルを大切に、扱いやすく、再現性の高いヘアをご提案します。",
    imageSrc: "/images/elise/staff-01.jpg",
  },
  {
    name: "Mika Tanaka",
    nameJa: "田中 美香",
    role: "Stylist",
    description:
      "お客様一人ひとりに寄り添い、毎日が心地よくなるスタイルをご提案します。",
    imageSrc: "/images/elise/staff-02.jpg",
  },
  {
    name: "Yui Honda",
    nameJa: "本田 結衣",
    role: "Assistant / Spa",
    description:
      "シャンプーやヘッドスパで、リラックスできる時間をお届けします。",
    imageSrc: "/images/elise/staff-03.jpg",
  },
];
