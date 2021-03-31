import { Component } from '@angular/core';

@Component({
    templateUrl: './select.component.html',
})
export class SelectComponent {
    items = [
        { code: 1, label: 'Example 1' },
        { code: 2, label: 'Example 2' },
    ];

    constructor() {}
}
