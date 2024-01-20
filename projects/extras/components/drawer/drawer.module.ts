import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PmeDrawerComponent } from './drawer.component';
import { PmeDrawerService } from './drawer.service';

@NgModule({
    imports: [CommonModule, OverlayModule, A11yModule, PmeDrawerComponent],
    providers: [PmeDrawerService],
})
export class PmeDrawerModule {}
