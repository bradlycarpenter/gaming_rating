import { IGDBClient } from "@api-wrappers/igdb-wrapper";
import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", async (c) => {
  return c.text("Ok");
});

app.get("/", async (c) => {
  const client = new IGDBClient({
    clientId: c.env.TWITCH_CLIENT_ID,
    clientSecret: c.env.TWITCH_SECRET,
  });

  const games = await client.games
    .query()
    .select((g) => ({
      name: g.name,
      raging: g.rating,
      cover: g.cover?.url,
      artworks: { imageId: g.artworks.image_id },
    }))
    .search("Witcher 3")
    .limit(10)
    .execute();

  return c.json(games);
});

export default app;
