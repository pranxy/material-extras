import { Inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrxSupabaseConfig, PRX_SUPABASE_CONFIG_TOKEN } from './supabase-config';

export type FilterOperator =
    | 'eq'
    | 'neq'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'like'
    | 'ilike'
    | 'is'
    | 'in'
    | 'cs'
    | 'cd'
    | 'sl'
    | 'sr'
    | 'nxl'
    | 'nxr'
    | 'adj'
    | 'ov'
    | 'fts'
    | 'plfts'
    | 'phfts'
    | 'wfts';

export type FindFilter = [
    column: string,
    op: FilterOperator,
    value: string | number | boolean | null
];

export type FindOrder = [column: string, ascending?: boolean];

@Injectable({
    providedIn: 'root',
})
export class SupabaseService {
    client: SupabaseClient;

    /**
     * table name
     */
    resource: string;

    constructor(@Inject(PRX_SUPABASE_CONFIG_TOKEN) private config: PrxSupabaseConfig) {
        const { supabaseUrl, supabaseKey, options } = this.config;
        this.client = createClient(supabaseUrl, supabaseKey, options);
    }

    findById<T>(id: number, select = '*'): Observable<T> {
        const query = this.table(this.resource).select(select).match({ id }).single();

        return from(query).pipe(map((res) => res.data as T));
    }

    find<T>(
        filters: FindFilter[],
        select = '*',
        range = [0, 10],
        orders: FindOrder[] = []
    ): Observable<T[]> {
        const query = this.table(this.resource).select(select);

        // filters is an array of FindFilters, so we chain each filter to the query builder
        filters.forEach(([column, op, value]) => {
            query.filter(column, op, value);
        });

        // same as filters, chaining multiple order by queries is possible
        orders.forEach(([column, ascending]) => {
            query.order(column, { ascending });
        });

        // use range for pagination
        query.range(range[0], range[1]);

        return from(query).pipe(map((res) => res.data as T[]));
    }

    count(filters: FindFilter[]) {
        // providing the option `head: true` will only return the count, otherwise results too.
        const query = this.table(this.resource).select('*', {
            count: 'exact',
            head: true,
        });

        filters.forEach(([column, op, value]) => {
            query.filter(column, op, value);
        });

        return from(query).pipe(map((res) => res.count));
    }

    create<T>(model: Partial<T>): Observable<T> {
        const query = this.table(this.resource)
            .insert({ ...model })
            .single();
        return from(query).pipe(map((res) => res.data as T));
    }

    createMany<T>(models: Partial<T>[]): Observable<T[]> {
        const query = this.table(this.resource).insert(models);
        return from(query).pipe(map((res) => res.data as T[]));
    }

    delete<T>(id: number): Observable<T> {
        const query = this.table(this.resource).delete().eq('id', id).single();
        return from(query).pipe(map((res) => res.data as T));
    }

    deleteMany<T>(filters: FindFilter[]): Observable<T[]> {
        const query = this.table(this.resource).delete();
        filters.forEach(([column, op, value]) => {
            query.filter(column, op, value);
        });

        return from(query).pipe(map((res) => res.data as T[]));
    }

    update<T>(id: number, data: Partial<T>): Observable<T> {
        const query = this.table(this.resource)
            .update({ ...data })
            .eq('id', id)
            .single();
        return from(query).pipe(map((res) => res.data as T));
    }

    // helpers for other custom methods you might write in the service. Returns typed result.
    protected returnList<T>(query: any): Observable<T[]> {
        return from(query).pipe(map((res: any) => res.data as T[]));
    }

    protected returnSingle<T>(query: any): Observable<T> {
        return from(query).pipe(map((res: any) => res.data?.[0] as T));
    }

    private table(resource: string) {
        return this.client.from(resource);
    }
}
