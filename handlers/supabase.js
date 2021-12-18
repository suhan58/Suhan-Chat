// const config = require("config");
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://bhdnyfbcwjlzbgjqehsh.supabase.co";

// const supabaseKey = config.get("SUPABASE_KEY");
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTE5OTgxNywiZXhwIjoxOTQ2Nzc1ODE3fQ.B9V5PCDRBzOVtiTnwryZoJBtXAzyWhpoB88JfhTdn-M";

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
