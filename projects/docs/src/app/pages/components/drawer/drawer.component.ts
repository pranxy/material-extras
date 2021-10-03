import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './drawer-overview.html',
})
export class DrawerOverviewComponent {
    constructor(public route: ActivatedRoute) {}
}

@Component({
    templateUrl: './drawer-api.html',
})
export class DrawerApiComponent {
    constructor(public route: ActivatedRoute) {}
}
