// import { sql } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";
// import * as schema from "./schema";

// export const db = drizzle(sql, { schema });

// export type DB = typeof db;

import { drizzle } from 'drizzle-orm/postgres-js'
import { createClient } from '@supabase/supabase-js';

import * as schema from './schema';

// Initialize the Supabase client
const supabaseUrl = 'https://mrrukklkopptpyabfflw.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ycnVra2xrb3BwdHB5YWJmZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzODQ5NTAsImV4cCI6MjA0Njk2MDk1MH0.UDQ5zd1Iljz4eYL0ahRLD0c3orzLn39dBHzvJ2Ad-Sc'; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);


// Set up drizzle with Supabase
export const db = drizzle(supabase, { schema: { personalInfoTable, experienceTable, educationTable, skillsTable } });


console.log(db)

export type DB = typeof db;
