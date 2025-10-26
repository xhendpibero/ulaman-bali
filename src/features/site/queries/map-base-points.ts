import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

import {
  fetchBaseMapPoints,
  type BaseMapPoint,
} from "@/features/site/services/fetch-map-points";

export const mapBasePointsQueryKey = ["map-base-points"] as const;

export const mapBasePointsQueryOptions = () =>
  queryOptions<ReadonlyArray<BaseMapPoint>>({
    queryKey: mapBasePointsQueryKey,
    queryFn: fetchBaseMapPoints,
  });

export const useMapBasePoints = () =>
  useSuspenseQuery(mapBasePointsQueryOptions());

