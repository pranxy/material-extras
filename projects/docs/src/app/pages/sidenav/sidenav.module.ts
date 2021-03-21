import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { ComponentListComponent } from '../component-list/component-list.component';
import { ComponentNavComponent } from '../component-nav/component-nav.component';
import { ComponentViewerComponent } from '../component-viewer/component-viewer.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SidenavComponent } from './sidenav.component';

const routes = [
    {
        path: '',
        component: SidenavComponent,
        children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'categories',
                children: [{ path: '', component: ComponentListComponent }],
            },
            {
                path: 'components',
                loadChildren: () =>
                    import('../components/components.module').then(m => m.ComponentsModule),
            },
            { path: '**', redirectTo: 'categories' },
        ],
    },
];

const comps = [
    ComponentListComponent,
    ComponentNavComponent,
    ComponentViewerComponent,
    PageHeaderComponent,
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [SidenavComponent, ...comps],
    exports: [...comps],
})
export class SidenavModule {}
