import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { COMPONENTS_MENU } from '../component-nav/component-nav.component';

@Component({
    templateUrl: './component-list.component.html',
    styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
    params: Observable<Params>;
    routeParamSubscription: Subscription;

    list = COMPONENTS_MENU;

    constructor() {}

    ngOnInit(): void {}
}
