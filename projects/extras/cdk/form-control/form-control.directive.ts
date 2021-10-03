import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Platform } from '@angular/cdk/platform';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Directive, DoCheck, ElementRef, Inject, Input, NgZone, OnDestroy, Optional, Self } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanUpdateErrorState, ErrorStateMatcher, mixinErrorState } from '@angular/material/core';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subject } from 'rxjs';

let nextUniqueId = 0;

// tslint:disable-next-line: variable-name
const HFormControlBase = mixinErrorState(
    class {
        constructor(
            public _defaultErrorStateMatcher: ErrorStateMatcher,
            public _parentForm: NgForm,
            public _parentFormGroup: FormGroupDirective,
            /** @docs-private */
            public ngControl: NgControl
        ) {}
    }
);

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[mat-radio-group[hFormControl], h-checkbox-group[hFormControl]]',
    exportAs: 'hFormControl',
    providers: [{ provide: MatFormFieldControl, useExisting: HydrogenFormControl }]
})
// tslint:disable-next-line: directive-class-suffix
export class HydrogenFormControl extends HFormControlBase implements OnDestroy, DoCheck, CanUpdateErrorState {
    protected _uid = `h-form-control-${nextUniqueId++}`;

    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    focused = false;

    readonly stateChanges: Subject<void> = new Subject<void>();

    controlType = 'h-form-field';

    @Input()
    get disabled(): boolean {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value);

        // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    protected _disabled = false;

    @Input()
    get id(): string {
        return this._id;
    }
    set id(value: string) {
        this._id = value || this._uid;
    }
    protected _id: string;

    @Input()
    get required(): boolean {
        return this._required;
    }
    set required(value: boolean) {
        this._required = coerceBooleanProperty(value);
    }
    protected _required = false;

    // @Input() override errorStateMatcher: ErrorStateMatcher;

    // @Input('aria-describedby') userAriaDescribedBy: string;

    @Input()
    get value(): string {
        return this.inputValueAccessor.value;
    }
    set value(value: string) {
        if (value !== this.value) {
            this.inputValueAccessor.value = value;
            this.stateChanges.next();
        }
    }

    @Input()
    get readonly(): boolean {
        return this._readonly;
    }
    set readonly(value: boolean) {
        this._readonly = coerceBooleanProperty(value);
    }
    private _readonly = false;

    constructor(
        protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        protected _platform: Platform,
        @Optional() @Self() ngControl: NgControl,
        @Optional() _parentForm: NgForm,
        @Optional() _parentFormGroup: FormGroupDirective,
        _defaultErrorStateMatcher: ErrorStateMatcher,
        @Optional() @Self() @Inject(MAT_INPUT_VALUE_ACCESSOR) protected inputValueAccessor: any,
        private _autofillMonitor: AutofillMonitor,
        ngZone: NgZone,
        // TODO: Remove this once the legacy appearance has been removed. We only need
        // to inject the form-field for determining whether the placeholder has been promoted.
        @Optional() @Inject(MAT_FORM_FIELD) private _formField?: MatFormField
    ) {
        super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);

        console.log('111111111111', ngControl.valid);
    }

    ngOnDestroy() {
        this.stateChanges.complete();

        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    }

    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }

        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        // this._dirtyCheckNativeValue();

        // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
        // present or not depends on a query which is prone to "changed after checked" errors.
        // this._dirtyCheckPlaceholder();
    }

    setDescribedByIds(ids: string[]) {
        if (ids.length) {
            this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
        } else {
            this._elementRef.nativeElement.removeAttribute('aria-describedby');
        }
    }
}
