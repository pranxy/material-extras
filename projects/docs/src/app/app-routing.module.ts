import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateComponentSidenav } from './pages/sidenav/sidenav-can-load-guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/homepage/homepage.component'),
    },
    {
        path: '404',
        loadComponent: () => import('./pages/not-found/not-found.component'),
    },
    {
        path: ':section',
        canActivate: [CanActivateComponentSidenav],
        loadChildren: () => import('./pages/sidenav/sidenav.routes').then((m) => m.SIDENAV_ROUTES),
    },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
