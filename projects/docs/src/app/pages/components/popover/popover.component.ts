import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './popover-overview.html',
})
export class PopoverOverviewComponent {
    constructor(public route: ActivatedRoute) {}
}

@Component({
    templateUrl: './popover-api.html',
})
export class PopoverApiComponent {
    constructor(public route: ActivatedRoute) {}
}
