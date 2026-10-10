// Datos públicos de Supabase para guardar registros de interés.
// La "anon key" o "publishable key" es pública por diseño: la tabla solo permite insertar (RLS).
// Nunca pongas aquí la service_role key ni la secret key.
window.ENCARGO_CONFIG = {
  supabaseUrl: "",       // ej. https://abcdefghijklm.supabase.co
  supabaseAnonKey: "",   // ej. eyJhbGciOi... o sb_publishable_...
  tabla: "interesados"
};
