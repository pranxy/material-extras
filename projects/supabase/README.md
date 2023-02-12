

```typescript
//app.module.ts 
export const SUPABASE_CONFIG: PrxSupabaseConfig = {
   supabaseUrl: '<SUPABASE-URL>',
   supabaseKey: '<SUPABASE-KEY>'
};
@NgModule({
    ...
    providers: [{ provide: PRX_SUPABASE_CONFIG_TOKEN, useValue: SUPABASE_CONFIG }],
    ...
})
```