import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'components',
    },
    {
        path: 'components',
        component: ComponentsComponent,
    },
    {
        path: 'components',
        children: [
            {
                path: 'select',
                loadChildren: () => import('./pages/components/select').then(m => m.SelectModule),
            },
            // {
            //     path: 'drawer',
            //     loadChildren: () => import('./pages/components/drawer').then(m => m.DrawerModule),
            // },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
