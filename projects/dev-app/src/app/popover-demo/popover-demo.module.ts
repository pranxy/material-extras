import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverDemoComponent } from './popover-demo.component';
import { RouterModule } from '@angular/router';
import { PmePopoverModule } from '@pranxy/material-extras/components/popover';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: PopoverDemoComponent }]),
        PmePopoverModule,
    ],
    declarations: [PopoverDemoComponent],
})
export class PopoverDemoModule {}
