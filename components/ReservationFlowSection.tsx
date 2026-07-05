import ReservationStepCard, {
  StepConnector,
} from "@/components/ReservationStepCard";
import SectionHeader from "@/components/SectionHeader";
import { reservationSteps } from "@/lib/reservation-steps";
import { Fragment } from "react";

export default function ReservationFlowSection() {
  return (
    <section
      id="reservation"
      aria-labelledby="reservation-flow-heading"
      className="bg-[var(--color-neutral)]"
    >
      <div id="reservation-flow" className="section-shell">
        <SectionHeader
          label="How to Reserve"
          titleId="reservation-flow-heading"
          title="ご予約はカンタン 5ステップ"
          description="メニュー選択から予約完了まで、スマホから迷わず進められるシンプルな流れです。"
        />

        {/* Mobile: vertical flow with down arrows */}
        <ol className="section-content list-none p-0 md:hidden">
          {reservationSteps.map((item, index) => (
            <Fragment key={item.step}>
              <li>
                <ReservationStepCard item={item} />
              </li>
              {index < reservationSteps.length - 1 && (
                <li
                  className="flex justify-center py-3 md:py-4"
                  aria-hidden="true"
                >
                  <StepConnector direction="vertical" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>

        {/* Tablet: 2-column grid */}
        <ol className="section-content hidden list-none grid-cols-2 gap-6 p-0 md:grid lg:hidden">
          {reservationSteps.map((item) => (
            <li key={item.step} className="h-full">
              <ReservationStepCard item={item} />
            </li>
          ))}
        </ol>

        {/* PC: 5 steps in a row with horizontal arrows */}
        <ol className="section-content hidden list-none items-start justify-center p-0 lg:flex lg:gap-2 xl:gap-3">
          {reservationSteps.map((item, index) => (
            <Fragment key={item.step}>
              <li className="w-full max-w-[11.5rem] flex-none xl:max-w-[12.5rem]">
                <ReservationStepCard item={item} />
              </li>
              {index < reservationSteps.length - 1 && (
                <li
                  className="flex flex-none items-center self-center px-0.5 pt-6"
                  aria-hidden="true"
                >
                  <StepConnector direction="horizontal" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
