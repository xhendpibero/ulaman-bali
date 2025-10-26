const JSONBIN_BASE_URL = "https://api.jsonbin.io/v3/b/";

type JsonBinResponse<T> = {
  record: T;
};

const DEFAULT_REVALIDATE_SECONDS = 60 * 60;

type FetchJsonBinOptions = {
  revalidate?: number;
};

export async function fetchJsonBinRecord<T>(
  urlOrId: string,
  options: FetchJsonBinOptions = {},
): Promise<T> {
  const endpoint = urlOrId.startsWith("http")
    ? urlOrId
    : `${JSONBIN_BASE_URL}${urlOrId.replace(/^\//, "")}`;

  const response = await fetch(endpoint, {
    next: { revalidate: options.revalidate ?? DEFAULT_REVALIDATE_SECONDS },
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch JsonBin resource from "${endpoint}" (${response.status})`,
    );
  }

  const payload = (await response.json()) as JsonBinResponse<T>;
  return payload.record;
}

