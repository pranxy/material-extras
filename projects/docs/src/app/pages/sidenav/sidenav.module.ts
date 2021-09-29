import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import {
    ComponentCategoryListModule,
    ComponentListComponent,
} from '../component-list/component-list.component';
import { ComponentNav } from '../component-nav/component-nav.component';
import { ComponentViewerModule } from '../component-viewer/component-viewer';
import { ComponentHeaderModule } from '../page-header/page-header.component';
import { ComponentSidenav } from './sidenav.component';

const routes = [
    {
        path: '',
        component: ComponentSidenav,
        children: [
            // { path: 'component/:id', redirectTo: ':id', pathMatch: 'full' },
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'categories',
                children: [{ path: '', component: ComponentListComponent }],
            },
            {
                path: '',
                loadChildren: () =>
                    import('../components/components.module').then(m => m.ComponentsModule),
            },
            { path: '**', redirectTo: 'categories' },
            // { path: '**', redirectTo: '/404' },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        ComponentCategoryListModule,
        ComponentViewerModule,
        ComponentHeaderModule,
    ],
    declarations: [ComponentSidenav, ComponentNav],
})
export class ComponentSidenavModule {}
