import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jgskwnducdepdqxjnots.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnc2t3bmR1Y2RlcGRxeGpub3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNzU0NzUsImV4cCI6MjA3Mjc1MTQ3NX0._SvcuYRlu0S6NC-xcnVc-MtalWQxzdndLyeR0wXWalc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

        