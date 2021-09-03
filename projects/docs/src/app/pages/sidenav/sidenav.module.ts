import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import {
    ComponentCategoryListModule,
    ComponentListComponent,
} from '../component-list/component-list.component';
import { ComponentNav } from '../component-nav/component-nav.component';
import {
    ComponentOverview,
    ComponentViewer,
    ComponentViewerModule,
} from '../component-viewer/component-viewer';
import { ComponentHeaderModule } from '../page-header/page-header.component';
import { SidenavComponent } from './sidenav.component';

const routes = [
    {
        path: '',
        component: SidenavComponent,
        children: [
            { path: 'component/:id', redirectTo: ':id', pathMatch: 'full' },
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'categories',
                children: [{ path: '', component: ComponentListComponent }],
            },
            {
                path: ':id',
                component: ComponentViewer,
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: ComponentOverview, pathMatch: 'full' },
                ],
            },
            { path: '**', redirectTo: '/404' },
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
    declarations: [SidenavComponent, ComponentNav],
})
export class ComponentSidenavModule {}
