import { Routes } from '@angular/router';

export const DEV_APP_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./dev-app-home') },
    // {
    //     path: 'dialog',
    //     loadChildren: () => import('../dialog/dialog-demo.module').then((m) => m.DialogDemoModule),
    // },
    // {
    //     path: 'drawer',
    //     loadChildren: () => import('../drawer/drawer-demo.module').then((m) => m.DrawerDemoModule),
    // },
    // {
    //     path: 'loader',
    //     loadChildren: () => import('../loader/loader-demo.module').then((m) => m.LoaderDemoModule),
    // },
    {
        path: 'popover',
        loadComponent: () => import('../popover-demo/popover-demo.component'),
    },
    // {
    //     path: 'progress',
    //     loadChildren: () =>
    //         import('../progress/progress-demo.module').then((m) => m.ProgressDemoModule),
    // },
    // {
    //     path: 'select',
    //     loadChildren: () => import('../select/select-demo.module').then((m) => m.SelectDemoModule),
    // },
    // {
    //     path: 'slider',
    //     loadChildren: () => import('../slider/slider-demo.module').then((m) => m.SliderDemoModule),
    // },
    // {
    //     path: 'split',
    //     loadChildren: () => import('../split/split-demo.module').then((m) => m.SplitDemoModule),
    // },
    // {
    //     path: 'text3d',
    //     loadChildren: () => import('../text3d/text3d-demo.module').then((m) => m.Text3dDemoModule),
    // },
    // {
    //     path: 'tooltip',
    //     loadChildren: () =>
    //         import('../tooltip/tooltip-demo.module').then((m) => m.TooltipDemoModule),
    // },
    { path: '**', loadComponent: () => import('./dev-app-404') },
];
