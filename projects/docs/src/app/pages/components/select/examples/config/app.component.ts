import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'select-example',
    templateUrl: './app.component.html',
    //   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    items = [
        { id: 1, label: 'Example 1' },
        { id: 2, label: 'Example 2' },
    ];

    items2 = ['oi1', 'oi2'];

    selectedItem = new UntypedFormControl('oi1');
    form: UntypedFormGroup;
    constructor(private fb: UntypedFormBuilder) {
        this.form = this.fb.group({
            select: [['oi1'], []],
            select2: ['oi1', []],
        });
    }
}
