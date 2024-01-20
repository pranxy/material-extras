import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'pme-select',
    exportAs: 'pmeSelect',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PmeSelectComponent),
            multi: true,
        },
    ],
    standalone: true,
    imports: [
        MatFormFieldModule,
        NgIf,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        NgFor,
        MatOptionModule,
    ],
})
export class PmeSelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
    @Input() label = 'Test label';
    @Input() placeholder = 'Test placeholder';
    @Input() items = [];
    @Input() appearance: MatFormFieldAppearance = 'outline';

    @Input() bindLabel = 'label';
    @Input() bindValue = 'code';
    @Input() clearable = true;
    @Input() multiple = false;

    subscriptions = [];

    input = new UntypedFormControl(null);

    constructor() {}

    ngOnInit(): void {
        console.log(this.items);
    }

    get displayLabel(): string[] {
        if (!this.items) {
            return [];
        }

        const selectedValue = this.input.value;

        if (Array.isArray(selectedValue)) {
            const items = this.items.filter((i) => selectedValue.includes(i[this.bindValue]));

            return items.map((i) => i[this.bindLabel]);
        } else {
            const item = this.items.find((i) => i[this.bindValue] === this.input.value);
            return item && [item[this.bindLabel]];
        }
    }

    clear(event) {
        event.stopPropagation();

        this.input.setValue(null);
    }

    onChange: any = () => {};
    onTouch: any = () => {};

    writeValue(input: boolean) {
        this.input.setValue(input);
    }

    registerOnChange(fn: any): void {
        this.subscriptions.push(this.input.valueChanges.subscribe(fn));
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    ngOnDestroy() {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
