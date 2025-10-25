"use client";

import Image from "next/image";

type MapPoint = {
  top: string;
  left: string;
  icon: string;
  label: string;
};

const MAP_POINTS: MapPoint[] = [
  {
    top: "8%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_oxZm069VX1y9A_Group6120.svg?auto=compress,format",
    label: "Tennis Court",
  },
  {
    top: "17%",
    left: "53%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jWpm069VX1y4H_Group5988.svg?auto=compress,format",
    label: "Gym",
  },
  {
    top: "24%",
    left: "33%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    label: "Bio-Filtered Lake",
  },
  {
    top: "13%",
    left: "56%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    label: "Reception",
  },
  {
    top: "36%",
    left: "60%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Ulin Poolside",
  },
  {
    top: "31%",
    left: "47%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    label: "Tree House",
  },
  {
    top: "37%",
    left: "41%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    label: "Cliffside Yoga Shala",
  },
  {
    top: "39%",
    left: "63%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Cocoon Jungle",
  },
  {
    top: "26%",
    left: "10%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Grand Lagoon Villa with Pool",
  },
  {
    top: "18%",
    left: "14%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Avatar Tree House",
  },
  {
    top: "70%",
    left: "61%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5Zm069VX1y_x_Layer2-1-.svg?auto=compress,format",
    label: "Ulaman Hall",
  },
  {
    top: "42%",
    left: "52%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    label: "E.A.R.T.H Lounge & Bar",
  },
  {
    top: "30%",
    left: "28%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_blZm069VX1y0-_Group5986.svg?auto=compress,format",
    label: "Riverside Spa",
  },
  {
    top: "37%",
    left: "36%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/ZoAthx5LeNNTwpgH_Lake.svg?auto=compress,format",
    label: "Waterfall & Waterfall Deck",
  },
  {
    top: "46%",
    left: "71%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Jungle Garden Pool",
  },
  {
    top: "38%",
    left: "54%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    label: "E.A.R.T.H Lounge Pool",
  },
  {
    top: "12%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_t5pm069VX1y_y_Layer2.svg?auto=compress,format",
    label: "Gift Shop",
  },
  {
    top: "21%",
    left: "25%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm5NpJm069VX1x-K_Group5932.svg?auto=compress,format",
    label: "Floating Lake",
  },
  {
    top: "21%",
    left: "42%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_pUZm069VX1y9T_Group5934.svg?auto=compress,format",
    label: "E.A.R.T.H Restaurant",
  },
  {
    top: "23%",
    left: "48%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_jmZm069VX1y4Q_Group6439.svg?auto=compress,format",
    label: "Waterfall Infinity Pool",
  },
  {
    top: "57%",
    left: "65%",
    icon: "https://ulaman.cdn.prismic.io/ulaman/Zm_tQJm069VX1y_a_Group6116.svg?auto=compress,format",
    label: "Mandala Yoga Shala",
  },
];

export function MapOfUlamanSlice() {
  return (
    <section
      data-slice-type="map_of_ulaman"
      data-slice-variation="default"
      className="relative"
    >
      <div className="mx-auto">
        <header className="mx-auto max-w-7xl space-y-4 px-6 lg:px-12">
          <div>
            <h3 className="display-3 heading">
              Discover Ulaman <br />
              From Above
            </h3>
          </div>
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-brand p-2.5 pr-3 text-light xl:flex">
            <span className="aspect-square w-2 rounded-full bg-light" />
            <span className="text-sm text-brand-cream-dark">Tap on an icon</span>
          </div>
          <div className="block text-smaller font-medium text-brand-darker xl:hidden">
            <span>* Use your finger to navigate</span>
          </div>
        </header>

        <div className="flex items-center justify-center">
          <div className="hide-scrollbar relative h-full w-full overflow-x-auto lg:show-scrollbar">
            <div className="relative mx-auto min-w-[80rem] max-w-[108rem]">
              <div className="aspect-[14.8/10] whitespace-nowrap">
                <Image
                  src="/ulaman.B-iYsIcw.jpg"
                  alt="Map of Ulaman Eco-Luxury Retreat"
                  width={1728}
                  height={1167}
                  priority
                  className="h-full w-full object-cover"
                />
                

              <ul>
                {MAP_POINTS.map((point) => (
                  <li key={`${point.label}-${point.top}-${point.left}`}>
                    <div
                      className="active-class:bg-brand active-class:text-light active-class:gap-3 absolute flex h-9 w-full max-w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-light px-2 text-14 text-brand transition-colors duration-300 hover:z-20 hover:gap-3 group"
                      style={{ top: point.top, left: point.left }}
                    >
                      <div className="w-5 shrink-0">
                        <Image
                          src={point.icon}
                          alt={point.label}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="w-full max-w-0 overflow-hidden transition-[max-width] duration-300 ease-in-out group-hover:max-w-[200px] [.group.active_&]:max-w-[200px]">
                        <span className="invisible text-smaller group-hover:visible [.group.active_&]:visible">
                          {point.label}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

