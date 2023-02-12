import { InjectionToken } from '@angular/core';
import { SupabaseClientOptions } from '@supabase/supabase-js';

export interface PrxSupabaseConfig<T = any> {
    supabaseUrl: string;
    supabaseKey: string;
    options?: SupabaseClientOptions<T>;
}

export const PRX_SUPABASE_CONFIG_TOKEN = new InjectionToken<PrxSupabaseConfig>(
    'prx-supabase-config'
);
