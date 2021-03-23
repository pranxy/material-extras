import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { ComponentViewerComponent } from '../component-viewer/component-viewer.component';

const routes = [
    {
        path: '',
        component: ComponentViewerComponent,
        children: [
            {
                path: 'select',
                loadChildren: () => import('./select/select.module').then(m => m.SelectModule),
            },
            //   {
            //     path: 'button',
            //     loadChildren: () => import('./button/button').then(m => m.ButtonModule),
            //   }
        ],
    },
];

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [],
    exports: [],
})
export class ComponentsModule {}
