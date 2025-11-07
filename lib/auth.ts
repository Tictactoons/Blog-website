import { supabase } from "./supabaseClient";

export const getSession = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session;
};
