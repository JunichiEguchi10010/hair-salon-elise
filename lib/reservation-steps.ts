export type ReservationStepIcon =
  | "menu"
  | "user"
  | "calendar"
  | "form"
  | "check";

/** 予約フロー — 後から API / CMS 置き換え用 */
export type ReservationStep = {
  step: number;
  title: string;
  description: string;
  icon: ReservationStepIcon;
};

export const reservationSteps: ReservationStep[] = [
  {
    step: 1,
    title: "メニューを選ぶ",
    description: "ご希望のメニューを選択します。",
    icon: "menu",
  },
  {
    step: 2,
    title: "担当者を選ぶ",
    description: "指名あり・指名なしを選べます。",
    icon: "user",
  },
  {
    step: 3,
    title: "日時を選ぶ",
    description: "空き枠からご希望の日時を選択します。",
    icon: "calendar",
  },
  {
    step: 4,
    title: "情報入力・確認",
    description: "お名前や連絡先を入力し、内容を確認します。",
    icon: "form",
  },
  {
    step: 5,
    title: "予約完了",
    description: "確認メールが届き、ご予約完了です。",
    icon: "check",
  },
];
