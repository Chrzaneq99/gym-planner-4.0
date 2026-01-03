// Supabase helper module
// Exports: loginUser, logoutUser, signupUser, savePlanToSupabase, loadPlanFromSupabase, onAuthChanged, ensureValidSupabaseConfig
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Supabase configuration with your project credentials
// Note: anon key is safe to expose publicly - security is handled by Row Level Security in Supabase
const defaultSupabaseConfig = {
  url: "https://rnhtlepamicokpybagjj.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuaHRsZXBhbWljb2tweWJhZ2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNjM1ODMsImV4cCI6MjA4MTYzOTU4M30.fUh958vXbHNpe9Tp4gcsKJvge-7WOekxmw5cYhGMwdk"
};

let supabaseConfig = Object.assign({}, defaultSupabaseConfig);

// Attempt to load a local override file (supabase.config.js) which should `export default { ... }`.
// This allows keeping real keys outside of version control. The import is dynamic so browsers
// that don't have the file won't fail at module parse time.
async function loadLocalOverride() {
  try {
    const mod = await import('./supabase.config.js');
    if (mod && mod.default && typeof mod.default === 'object') {
      supabaseConfig = Object.assign({}, supabaseConfig, mod.default);
      console.info('Loaded supabase.config.js override.');
    }
  } catch (e) {
    // Ignore errors — missing file is expected in many setups
  }
}

// Validate config - ensure required fields are present
export function ensureValidSupabaseConfig() {
  const missing = [];
  for (const [k, v] of Object.entries(supabaseConfig)) {
    if (!v || typeof v !== 'string' || v.trim() === '') missing.push(k);
  }
  if (missing.length > 0) {
    const keys = missing.join(', ');
    throw new Error(`Supabase configuration is missing required values for: ${keys}. Check firebase.js configuration.`);
  }
}

// Load local override (if present) and validate config without initializing Supabase.
export async function prepareConfig() {
  await loadLocalOverride();
  ensureValidSupabaseConfig();
}

let _initialized = false;
let _supabase = null;

async function ensureInitialized() {
  if (_initialized) return;
  await loadLocalOverride();
  ensureValidSupabaseConfig();
  _supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey);
  _initialized = true;
}

export async function signupUser(username, password) {
  await ensureInitialized();
  try {
    const { data, error } = await _supabase.auth.signUp({
      email: `${username}@gymapp.com`, // fake email format with valid domain
      password: password,
      options: {
        data: { username: username }
      }
    });
    if (error) throw error;
    return data.user;
  } catch (err) {
    console.error('signupUser error', err);
    throw err;
  }
}

export async function loginUser(username, password) {
  await ensureInitialized();
  try {
    const { data, error } = await _supabase.auth.signInWithPassword({
      email: `${username}@gymapp.com`,
      password: password
    });
    if (error) throw error;
    return data.user;
  } catch (err) {
    console.error('loginUser error', err);
    throw err;
  }
}

export async function logoutUser() {
  await ensureInitialized();
  try {
    const { error } = await _supabase.auth.signOut();
    if (error) throw error;
  } catch (err) {
    console.error('logoutUser error', err);
    throw err;
  }
}

export async function savePlanToSupabase(username, planObj) {
  await ensureInitialized();
  if (!username) throw new Error('Missing username');
  try {
    const { error } = await _supabase
      .from('user_plans')
      .upsert({ username: username, plan_data: planObj });
    if (error) throw error;
    return true;
  } catch (err) {
    console.error('savePlanToSupabase error', err);
    throw err;
  }
}

export async function loadPlanFromSupabase(username) {
  await ensureInitialized();
  if (!username) throw new Error('Missing username');
  try {
    const { data, error } = await _supabase
      .from('user_plans')
      .select('plan_data')
      .eq('username', username)
      .single();
    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows found
    return data ? data.plan_data : null;
  } catch (err) {
    console.error('loadPlanFromSupabase error', err);
    throw err;
  }
}

export async function onAuthChanged(callback) {
  await ensureInitialized();
  const { data } = _supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null);
  });
  return data.subscription.unsubscribe;
}

export { /* intentionally no named exports for auth/db */ };
