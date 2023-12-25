import type { Config } from "drizzle-kit";
// import * as dotenv from "dotenv";

// dotenv.config({ path: "../../.env" });


const connectionString = process.env.DATABASE_URL as string
export default {
  schema: "./src/schema/*ts",
  driver: "pg",
  dbCredentials: { 
    connectionString: connectionString,
   },
  tablesFilter: ["t3turbo_*"],
} satisfies Config;