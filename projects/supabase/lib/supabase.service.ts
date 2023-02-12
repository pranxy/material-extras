import { Inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PrxSupabaseConfig, PRX_SUPABASE_CONFIG_TOKEN } from './supabase-config';

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    client: SupabaseClient;

    constructor(@Inject(PRX_SUPABASE_CONFIG_TOKEN) private config: PrxSupabaseConfig) {
        const { supabaseUrl, supabaseKey } = this.config;
        this.client = createClient(supabaseUrl, supabaseKey);
    }
}
