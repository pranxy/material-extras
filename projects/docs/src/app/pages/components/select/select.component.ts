import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './select-overview.html',
    styleUrls: ['./select.component.scss'],
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
