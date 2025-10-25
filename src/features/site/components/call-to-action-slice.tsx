"use client";

export function CallToActionSlice() {
  return (
    <section
      data-slice-type="call_to_action"
      data-slice-variation="default"
      className="app-container"
    >
      <div className="mx-auto space-y-5 sm:space-y-6 xl:space-y-5 max-w-[24.35rem] lg:max-w-[30rem]">
        <div
          className="space-y-em text-center"
          id="cta-15-text-block"
        >
          <h4 className="display-4 heading">
            <div>Reconnect With Yourself In </div>
            <div>Luxurious Comfort.</div>
          </h4>
        </div>
        <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-8 text-brand">
          <li className="inline-block cta-buttons">
            <button className="btn-primary ui-underline-anim reverse">
              Book Your Stay
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
