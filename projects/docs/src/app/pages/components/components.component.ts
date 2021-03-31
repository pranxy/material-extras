import { Component, OnInit } from '@angular/core';
import { COMPONENTS_MENU } from '../component-nav/component-nav.component';

@Component({
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
    list = COMPONENTS_MENU;
    constructor() {}

    ngOnInit() {}
}
