import { Routes } from '@angular/router';

export const SIDENAV_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./sidenav.component'),
        children: [
            // { path: 'component/:id', redirectTo: ':id', pathMatch: 'full' },
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('../component-list/component-list.component'),
                    },
                ],
            },
            {
                path: '',
                loadChildren: () =>
                    import('../components/components.routes').then((mod) => mod.COMPONENTS_ROUTES),
            },
            { path: '**', redirectTo: 'categories' },
            // { path: '**', redirectTo: '/404' },
        ],
    },
];
