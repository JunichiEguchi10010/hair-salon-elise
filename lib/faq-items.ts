/** FAQ — 後から CMS / Supabase 置き換え用 */
export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: "first-time",
    question: "初めてでも予約できますか？",
    answer:
      "はい、可能です。\n初めての方にも安心していただけるよう、施術前にゆっくりとカウンセリングの時間を設けています。",
  },
  {
    id: "cancel-change",
    question: "キャンセルや変更はできますか？",
    answer:
      "はい。\nご予約の変更やキャンセルをご希望の場合は、予約完了メールの内容をご確認のうえ、お早めにご連絡ください。",
  },
  {
    id: "menu-uncertain",
    question: "メニューに迷っていても予約できますか？",
    answer:
      "はい、可能です。\nカラーやトリートメントなどで迷われている場合も、施術前に髪の状態を見ながら一緒に整理していきます。",
  },
  {
    id: "same-day",
    question: "当日の予約はできますか？",
    answer:
      "空き枠がある場合はご予約いただけます。\nスマホから空き状況を確認できますので、思い立ったタイミングでご利用いただけます。",
  },
  {
    id: "consultation",
    question: "カラーやトリートメントの相談はできますか？",
    answer:
      "はい、可能です。\n髪のお悩みや理想のスタイルを伺いながら、無理のないメニューをご提案します。",
  },
];
