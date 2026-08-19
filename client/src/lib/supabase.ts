/**
 * Somasphere Learning Field Notes — browser integration reminder.
 * Only use the Supabase anon key in the browser; keep service-role credentials on the server.
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "https://your-project.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "replace-with-your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
