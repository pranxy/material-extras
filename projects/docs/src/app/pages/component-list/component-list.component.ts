import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { ComponentPageTitle } from '../../services/page-title.service';
import { COMPONENTS_MENU } from '../component-nav/component-nav.component';

@Component({
    templateUrl: './component-list.component.html',
    styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
    params: Observable<Params>;
    routeParamSubscription: Subscription;

    list = COMPONENTS_MENU;

    constructor(public _componentPageTitle: ComponentPageTitle, private _route: ActivatedRoute) {}

    ngOnInit(): void {
        this.params = combineLatest([this._route.pathFromRoot.map(route => route.params)]);

        this.routeParamSubscription = this.params.subscribe(params => {
            this._componentPageTitle.title = 'components';
        });
    }
}
