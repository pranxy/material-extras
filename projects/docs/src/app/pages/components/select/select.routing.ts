import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { selectConfigurableExampleConfig } from './examples/config';
import { SelectApiComponent, SelectComponent } from './select.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: 'overview',
        component: SelectComponent,
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
    { path: '**', redirectTo: 'overview' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SelectRoutingModule {}
