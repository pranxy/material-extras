import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { PmeSelect2Module } from 'extras/components/select2';
import { SharedModule } from '../../../shared';
import { SelectConfigurableComponent, selectConfigurableExampleConfig } from './examples/config';
import { SelectApiComponent, SelectOverviewComponent } from './select.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        pathMatch: 'full',
        component: SelectOverviewComponent,
        data: {
            examples: [selectConfigurableExampleConfig],
        },
    },
    {
        path: 'api',
        component: SelectApiComponent,
        pathMatch: 'full',
        data: {
            content: require('!!raw-loader!!highlight-loader!markdown-loader!./select.md'),
        },
    },
    // { path: '**', redirectTo: 'overview' },
];

const material = [MatFormFieldModule, ReactiveFormsModule];

@NgModule({
    declarations: [SelectOverviewComponent, SelectApiComponent, SelectConfigurableComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        PmeSelect2Module,
        ...material,
    ],
})
export class SelectModule {}
