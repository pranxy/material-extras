import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PmeSelect2Component } from './select2.component';

@NgModule({
    imports: [CommonModule, OverlayModule, MatSelectModule, MatInputModule, MatButtonModule],
    declarations: [PmeSelect2Component],
    exports: [PmeSelect2Component],
})
export class PmeSelect2Module {}
