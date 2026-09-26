import { z } from "zod";
import { Hono } from "hono";
import { IGDBClient } from "@api-wrappers/igdb-wrapper";
import { createAuth } from "./auth.ts";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.on(["POST", "GET"], "/api/auth/*", (c) => createAuth(c.env).handler(c.req.raw));

app.get("/health", async (c) => {
  return c.text("Ok");
});

app.get("/games/search", async (c) => {
  const queryResult = z.string().min(1).safeParse(c.req.query("q"));

  if (queryResult.error) {
    return c.json({ error: "Invalid Query" }, 400);
  }

  const query = queryResult.data;

  const client = new IGDBClient({
    clientId: c.env.TWITCH_CLIENT_ID,
    clientSecret: c.env.TWITCH_SECRET,
  });

  const games = await client.games
    .query()
    .select((g) => ({
      name: g.name,
      releaseYear: g.first_release_date,
      coverUrl: g.cover?.url,
    }))
    .search(query)
    .limit(20)
    .execute();

  return c.json(games);
});

export default app;
