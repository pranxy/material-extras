import { InjectionToken } from '@angular/core';

export interface PrxSupabaseConfig {
    supabaseUrl: string;
    supabaseKey: string;
}

export const PRX_SUPABASE_CONFIG_TOKEN = new InjectionToken<PrxSupabaseConfig>(
    'prx-supabase-config'
);
