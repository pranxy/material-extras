import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PmeSelect2Module } from 'extras/components/select2';
import { SharedModule } from '../../../shared';
import { SelectComponent } from './select.component';
import { SelectRoutingModule } from './select.routing';
import { SelectApiComponent } from './tabs/select-api/select-api.component';
import { SelectExamplesComponent } from './tabs/select-examples/select-examples.component';
import { TimePickerDirective } from './time-picker.directive';

const material = [MatFormFieldModule, ReactiveFormsModule];

@NgModule({
    declarations: [
        SelectComponent,
        SelectApiComponent,
        SelectExamplesComponent,
        TimePickerDirective,
    ],
    imports: [CommonModule, SelectRoutingModule, SharedModule, PmeSelect2Module, ...material],
    exports: [TimePickerDirective],
})
export class SelectModule {}
