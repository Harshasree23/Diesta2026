
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qrghfvhwxkkfchmnbtqz.supabase.co";
const supabaseKey = "sb_publishable_TYpNeV1GIxOprif7zA-z9A__Hg24Ho6";

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);

export default supabase;
        