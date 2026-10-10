// Datos públicos de Supabase para guardar registros de interés.
// La "anon key" o "publishable key" es pública por diseño: la tabla solo permite insertar (RLS).
// Nunca pongas aquí la service_role key ni la secret key.
window.ENCARGO_CONFIG = {
  supabaseUrl: "https://pgcydgjrkhtaiymadfvm.supabase.co",
  supabaseAnonKey: "sb_publishable_dBBZ1FO4wvGBjnk5mvoOeA_PCr_lqPO",
  tabla: "interesados"
};
