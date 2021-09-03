import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

export const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
    },
    {
        path: '',
        children: [
            {
                path: 'select',
                loadChildren: () => import('./select').then(m => m.SelectModule),
            },
            // {
            //     path: 'drawer',
            //     loadChildren: () => import('./pages/components/drawer').then(m => m.DrawerModule),
            // },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
class ComponentsRoutingModule {}

@NgModule({
    imports: [CommonModule, ComponentsRoutingModule],
    declarations: [ComponentsComponent],
})
export class ComponentsModule {}
