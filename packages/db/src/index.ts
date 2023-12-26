import postgres from 'postgres';
import { drizzle } from "drizzle-orm/postgres-js";
export const schema ={};

const connectionString = process.env.DATABASE_URL as string
const client = postgres(connectionString);

export const db = drizzle(client, schema);