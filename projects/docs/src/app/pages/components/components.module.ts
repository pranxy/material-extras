import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { ComponentViewerComponent } from '../component-viewer/component-viewer.component';

const routes = [
    {
        path: '',
        component: ComponentViewerComponent,
        children: [
            //   {
            //     path: 'alert',
            //     loadChildren: () => import('./alert/alert').then(m => m.AlertModule),
            //   },
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
