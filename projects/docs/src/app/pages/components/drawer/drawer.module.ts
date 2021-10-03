import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { PmeDrawerModule } from '@pranxy/material-extras/components/drawer';
import { SharedModule } from 'docs/src/app/shared';
import { DrawerApiComponent, DrawerOverviewComponent } from './drawer.component';
import { drawerCallbackExampleConfig } from './examples/callback';
import { drawerConfigurableExampleConfig } from './examples/config';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        pathMatch: 'full',
        component: DrawerOverviewComponent,
        data: {
            examples: [drawerConfigurableExampleConfig, drawerCallbackExampleConfig],
        },
    },
    {
        path: 'api',
        component: DrawerApiComponent,
        pathMatch: 'full',
        data: {
            content: require('!!raw-loader!!highlight-loader!markdown-loader!./drawer.md'),
        },
    },
    { path: '**', redirectTo: 'overview' },
];

@NgModule({
    declarations: [DrawerOverviewComponent, DrawerApiComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        PmeDrawerModule,
        MatButtonModule,
    ],
})
export class DrawerModule {}
