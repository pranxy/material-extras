import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared';

@Component({
    selector: 'app-select-overview',
    templateUrl: './select-overview.html',
})
export class SelectOverviewComponent {
    constructor(public route: ActivatedRoute) {}
}

@Component({
    selector: 'app-select-api',
    templateUrl: './select-api.html',
})
export class SelectApiComponent {
    constructor(public route: ActivatedRoute) {}
}

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                component: SelectOverviewComponent,
                pathMatch: 'full',
            },
            //   {
            //     path: 'api',
            //     component: ButtonApiComponent,
            //     pathMatch: 'full',
            //   },
            { path: '**', redirectTo: 'overview' },
        ]),
    ],
})
export class SelectModule {}
