import { createClient } from "@supabase/supabase-js";
import dotenvx from "@dotenvx/dotenvx";
dotenvx.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
