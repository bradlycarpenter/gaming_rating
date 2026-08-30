import { env } from "@/env";
import { GameSummary, gameSummarySchema } from "@/types";

export async function searchGames(query: string, signal?: AbortSignal): Promise<GameSummary[]> {
  const url = new URL("/games/search", env.EXPO_PUBLIC_API_URL);
  url.searchParams.set("q", query);

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Failed to search games: ${response.status}`);
  }

  return gameSummarySchema.array().parse(await response.json());
}
