import { z } from "zod";

export const env = z
  .object({
    EXPO_PUBLIC_API_URL: z.url(),
  })
  .parse(process.env);
