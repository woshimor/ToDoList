import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "db/schema.ts",
  out: "db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:yWC7IBpu8YqQ@ep-muddy-star-a52ahown.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
