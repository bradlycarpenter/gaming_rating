import { z } from "zod";

export const gameSummarySchema = z.object({
  id: z.number(),
  cover: z
    .object({
      id: z.number(),
      url: z.string(),
    })
    .optional(),
  first_release_date: z.number().optional(),
  name: z.string(),
});

export type GameSummary = z.infer<typeof gameSummarySchema>;
