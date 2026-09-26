import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { createDb } from "./database.ts";
import * as schema from "./db/schema.ts";
import { expo } from "@better-auth/expo";

export function createAuth(env: CloudflareBindings) {
  return betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    plugins: [expo()],
    trustedOrigins: [
      "gr://",

      ...(process.env.NODE_ENV === "development"
        ? ["exp://", "exp://**", "exp://192.168.*.*:*/**"]
        : []),
    ],
    emailAndPassword: {
      enabled: true,
    },
    database: drizzleAdapter(createDb(env.d1_gr), {
      provider: "sqlite",
      schema,
    }),
  });
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(createDb({} as D1Database), {
    provider: "sqlite",
    schema,
  }),
});
