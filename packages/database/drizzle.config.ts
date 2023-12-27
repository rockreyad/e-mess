import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL environment variable is required.");
}

const conectionString = process.env.POSTGRES_URL as string;

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: conectionString,
  },
  verbose: true,
  strict: true,
});
