import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { PmePopoverModule } from '@pranxy/material-extras/components/popover';
import { NameComponent } from '@pranxy/material-extras/components/popover/popover.component';
import { SharedModule } from 'docs/src/app/shared';
import { popoverCallbackExampleConfig } from './examples/callback';
import { popoverConfigurableExampleConfig } from './examples/config';
import { PopoverApiComponent, PopoverOverviewComponent } from './popover.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        pathMatch: 'full',
        component: PopoverOverviewComponent,
        data: {
            examples: [popoverConfigurableExampleConfig, popoverCallbackExampleConfig],
        },
    },
    {
        path: 'api',
        component: PopoverApiComponent,
        pathMatch: 'full',
        data: {
            content: require('!!raw-loader!!highlight-loader!markdown-loader!./popover.md'),
        },
    },
    { path: '**', redirectTo: 'overview' },
];

@NgModule({
    declarations: [PopoverOverviewComponent, PopoverApiComponent, NameComponent],
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes), MatButtonModule],
})
export class PopoverModule {}
