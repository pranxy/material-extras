import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/homepage').then(m => m.HomepageModule),
    },
    { path: 'categories', redirectTo: '/components/categories' },
    {
        path: 'components',
        loadChildren: () => import('./pages/sidenav/sidenav.module').then(m => m.SidenavModule),
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
