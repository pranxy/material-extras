import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export const COMPONENTS_MENU = {
    title: 'Basic',
    children: [
        {
            id: 'select',
            name: 'Select',
            summary: 'Improved mat-select with more options similar to ng-select',
        },
        // {
        //     id: 'drawer',
        //     name: 'Drawer',
        //     summary: 'Flexible drawer container',
        // },
    ],
};

@Component({
    selector: 'app-component-nav',
    templateUrl: './component-nav.component.html',
    styleUrls: ['./component-nav.component.scss'],
})
export class ComponentNavComponent implements OnInit {
    @Output() navChange = new EventEmitter<any>();

    menus = COMPONENTS_MENU;

    constructor() {}

    ngOnInit(): void {}
}
