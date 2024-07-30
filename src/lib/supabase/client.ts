import { createClient } from "@supabase/supabase-js";

import { Database } from "./__generated__/supabase.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
export const supabaseClient = createClient<Database>(supabaseUrl, supabaseServiceKey);
