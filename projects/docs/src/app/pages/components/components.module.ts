import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';
import { ComponentViewer } from '../component-viewer/component-viewer';

export const routes: Routes = [
    {
        path: '',
        component: ComponentViewer,
        children: [
            {
                path: 'select',
                loadChildren: () => import('./select/select.module').then(m => m.SelectModule),
            },
            {
                path: 'drawer',
                loadChildren: () => import('./drawer/drawer.module').then(m => m.DrawerModule),
            },
        ],
    },
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [],
})
export class ComponentsModule {}
