import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export const COMPONENTS_MENU = [
    {
        title: 'Basic',
        children: [
            {
                id: 'alert',
                name: 'Alert',
                summary: 'Provide contextual feedback messages for typical user actions.',
            },
            {
                id: 'button',
                name: 'Button',
                summary: 'Provide a material button loading directive.',
            },
        ],
    },
    {
        title: 'Experimental',
        children: [
            {
                id: 'form-group',
                name: 'Form Group',
                summary: 'Material form field with Fluent UI style.',
            },
            {
                id: 'text3d',
                name: 'Text 3D',
                summary: 'Experimental component for 3d text.',
            },
        ],
    },
];

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
