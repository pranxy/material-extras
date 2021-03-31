import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PmeSelectModule } from '@pranxy/material-extras/select';
import { SharedModule } from '../../../shared';
import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select.routing';

@NgModule({
    declarations: [SelectComponent],
    imports: [CommonModule, SelectRoutingModule, SharedModule, PmeSelectModule],
})
export class SelectModule {}
