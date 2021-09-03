import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
    items = [
        { id: 1, label: 'Example 1' },
        { id: 2, label: 'Example 2' },
    ];

    items2 = ['oi1', 'oi2'];

    selectedItem = new FormControl('oi1');
    form: FormGroup;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            select: [['oi1'], []],
            select2: ['oi1', []],
        });
    }
}
