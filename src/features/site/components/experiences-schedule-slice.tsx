"use client";

type ScheduleEntry =
  | {
      label: string;
      color: string;
      height: string;
    }
  | null;

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const SCHEDULE_ROWS: Array<{
  time: string;
  entries: ScheduleEntry[];
}> = [
  {
    time: "7 AM",
    entries: DAYS.map(() => ({
      label: "Yoga (All Levels)",
      color: "#D7DEBF",
      height: "4rem",
    })),
  },
  {
    time: "12 PM",
    entries: DAYS.map(() => ({
      label: "Sound Healing",
      color: "#CED5CE",
      height: "5.5rem",
    })),
  },
  {
    time: "1 PM",
    entries: DAYS.map(() => null),
  },
];

export function ExperiencesScheduleSlice() {
  return (
    <section
      data-slice-type="experiences_catalog"
      data-slice-variation="activitiesTimetable"
    >
      <div>
        <div>
          <div>
            <div className="mx-auto pl-4 text-center">
              <div className="relative left-0 top-0 mx-auto max-w-[73.75rem] 2xl:max-w-pro">
                <header>
                  <div className="space-y-4 pb-16">
                    <h2 className="heading display-2">Weekly Schedule</h2>
                    <p>Advanced Booking Is Recommended</p>
                  </div>
                </header>

                <div className="relative overflow-none">
                  <div className="grid w-max grid-cols-[5rem_repeat(7,_1fr)] gap-0 sm:w-auto">
                    <div className="sticky left-0 z-10 border border-brand/50 border-x-0 border-t-0 bg-light-background p-6 tracking-wider"></div>
                    {DAYS.map((day) => (
                      <div
                        key={day}
                        className="min-w-[7.5rem] border border-brand/50 border-r-0 border-t-0 bg-light-background p-6 text-brand text-smallest font-normal tracking-none lg:text-smaller"
                      >
                        {day}
                      </div>
                    ))}

                    {SCHEDULE_ROWS.map((row) => (
                      <div key={row.time} className="grid-row group contents">
                        <div className="sticky left-0 z-10 border border-brand/50 border-x-0 border-t-0 bg-light-background pt-8 text-brand text-smallest font-normal tracking-wider group-last:border-b-0 lg:text-smaller">
                          {row.time}
                        </div>
                        {row.entries.map((entry, index) => (
                          <div
                            key={`${row.time}-${DAYS[index]}`}
                            className="pointer-events-none h-20 border border-brand/50 border-r-0 border-t-0 group-last:border-b-0 p-2 relative"
                          >
                            {entry ? (
                              <h4
                                className="custom-width absolute left-1/2 top-1/2 flex h-full w-full max-h-20 -translate-x-1/2 -translate-y-1/2 items-center rounded-md p-1 pl-2 text-left text-smallest font-normal text-brand hover:opacity-80"
                                style={{
                                  backgroundColor: entry.color,
                                  height: entry.height,
                                  width: "90%",
                                }}
                              >
                                {entry.label}
                              </h4>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <footer className="app-container mt-10 flex justify-between text-smaller sm:mt-11 lg:mt-10">
              <nav>
                <a
                  href="https://drive.google.com/file/d/1HOiTV2UmmH4joOGKhwJhYdPIeN3Y9NfK/view"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-primary text-smaller ui-underline-anim reverse"
                >
                  Download PDF
                </a>
              </nav>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

