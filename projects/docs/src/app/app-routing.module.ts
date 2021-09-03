import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateComponentSidenav } from './pages/sidenav/sidenav-can-load-guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule),
    },
    {
        path: '404',
        loadChildren: () => import('./pages/not-found').then(m => m.NotFoundModule),
    },
    {
        path: ':section',
        canActivate: [CanActivateComponentSidenav],
        loadChildren: () =>
            import('./pages/sidenav/sidenav.module').then(m => m.ComponentSidenavModule),
    },
    { path: '**', redirectTo: '/404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
