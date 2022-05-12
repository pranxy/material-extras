import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmePopover } from './popover.component';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    imports: [CommonModule, OverlayModule],
    declarations: [PmePopover],
    exports: [PmePopover],
    providers: [Overlay],
})
export class PmePopoverModule {}
