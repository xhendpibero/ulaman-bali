type MapPointApiResponse = {
  data: MapPointApiRecord[];
};

type MapPointApiRecord = {
  slug: string;
  label: string;
  category: string | null;
  title: string;
  subtitle: string | null;
  description: string | null;
  position: {
    top: number | string;
    left: number | string;
  };
  icon_url: string;
  cta: {
    label: string | null;
    url: string | null;
  };
  images: Array<{
    src: string;
    alt: string;
  }>;
  updated_at: string;
};

export type BaseMapPoint = {
  label: string;
  top: string;
  left: string;
  icon: string;
  modal?: {
    category?: string | null;
    title?: string;
    subtitle?: string | null;
    description?: string | null;
    cta?: {
      label?: string | null;
      url?: string | null;
    } | null;
    images?: Array<{
      src: string;
      alt: string;
    }>;
  };
};

const MAP_POINTS_API_URL = "http://147.93.107.169:11020/api/map-points";

const DEFAULT_REVALIDATE_SECONDS = 60;

export async function fetchBaseMapPoints(): Promise<
  ReadonlyArray<BaseMapPoint>
> {
  const response = await fetch(MAP_POINTS_API_URL, {
    next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch map points");
  }

  const payload = (await response.json()) as MapPointApiResponse;

  return payload.data.map<BaseMapPoint>((point) => ({
    label: point.label,
    top: toPercentage(point.position.top),
    left: toPercentage(point.position.left),
    icon: point.icon_url,
    modal: {
      category: point.category,
      title: point.title,
      subtitle: point.subtitle,
      description: point.description,
      cta:
        point.cta?.url || point.cta?.label
          ? {
              label: point.cta.label,
              url: point.cta.url,
            }
          : null,
      images: point.images,
    },
  }));
}

function toPercentage(value: number | string): string {
  if (typeof value === "number") {
    return `${value}%`;
  }

  const trimmed = value.trim();
  if (trimmed.endsWith("%")) {
    return trimmed;
  }

  const numeric = Number(trimmed);
  return Number.isFinite(numeric) ? `${numeric}%` : trimmed;
}
