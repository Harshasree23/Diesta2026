
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lqardtzrlrilkiivrrpv.supabase.co";
const supabaseKey = "sb_publishable_c_019JPv4v3Xf5IMXP-p4Q_4PuwmI6E";

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

export default supabase;
        