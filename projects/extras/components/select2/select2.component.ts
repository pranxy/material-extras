import { Component, Input } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

@Component({
    selector: 'pme-select2',
    exportAs: 'pmeSelect2',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        { provide: MatFormFieldControl, useExisting: PmeSelect2Component },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: PmeSelect2Component },
    ],
})
export class PmeSelect2Component extends MatSelect {
    // @Input() items = [];

    @Input() bindLabel = 'label';
    @Input() bindValue = 'code';
    @Input() clearable = true;

    // subscriptions = [];

    // input = new FormControl(null);

    // get displayLabel(): string[] {
    //     if (!this.items) {
    //         return [];
    //     }

    //     const selectedValue = this.input.value;

    //     if (Array.isArray(selectedValue)) {
    //         const items = this.items.filter(i => selectedValue.includes(i[this.bindValue]));

    //         return items.map(i => i[this.bindLabel]);
    //     } else {
    //         const item = this.items.find(i => i[this.bindValue] === this.input.value);
    //         return item && [item[this.bindLabel]];
    //     }
    // }

    // clear(event) {
    //     event.stopPropagation();

    //     this.input.setValue(null);
    // }

    // onChange: any = () => {};
    // onTouch: any = () => {};

    // writeValue(input: boolean) {
    //     this.input.setValue(input);
    // }

    // registerOnChange(fn: any): void {
    //     this.subscriptions.push(this.input.valueChanges.subscribe(fn));
    // }

    // registerOnTouched(fn: any): void {
    //     this.onTouch = fn;
    // }

    // ngOnDestroy() {
    //     this.subscriptions.forEach(sub => sub.unsubscribe());
    // }
}
