import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('../component-viewer/component-viewer'),
        children: [
            // {
            //     path: 'popover',
            //     loadComponent: () =>
            //         import('./test-select/test-select.component').then(
            //             (m) => m.TestSelectComponent
            //         ),
            // },
            // {
            //     path: 'select',
            //     loadChildren: () => import('./select/select.module').then((m) => m.SelectModule),
            // },
            // {
            //     path: 'drawer',
            //     loadChildren: () => import('./drawer/drawer.module').then((m) => m.DrawerModule),
            // },
            // {
            //     path: 'popover',
            //     loadChildren: () => import('./popover/popover.module').then((m) => m.PopoverModule),
            // },
        ],
    },
];
