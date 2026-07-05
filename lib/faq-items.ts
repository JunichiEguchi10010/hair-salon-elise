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
      "はい、初めての方もWebから簡単にご予約いただけます。メニュー・担当者・日時を順番に選ぶだけで、迷わず予約できます。",
  },
  {
    id: "cancel-change",
    question: "キャンセルや変更はできますか？",
    answer:
      "ご予約の変更やキャンセルをご希望の場合は、予約完了メールに記載の内容をご確認のうえ、できるだけ早めにご連絡ください。",
  },
  {
    id: "nomination-fee",
    question: "指名料はかかりますか？",
    answer:
      "スタッフによって指名料が異なる場合があります。予約時に担当者を選択する際、必要な場合は分かりやすく表示する想定です。",
  },
  {
    id: "same-day",
    question: "当日の予約はできますか？",
    answer:
      "空き枠がある場合は、当日でもご予約いただけます。日時選択画面で空き状況をご確認ください。",
  },
  {
    id: "consultation",
    question: "カラーやトリートメントの相談はできますか？",
    answer:
      "はい、髪質や現在の状態に合わせてご提案します。迷った場合は、予約時のメモ欄にご相談内容をご記入ください。",
  },
];
