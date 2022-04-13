import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Self,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    FormGroupDirective,
    NgControl,
    NgForm,
} from '@angular/forms';
import {
    CanUpdateErrorState,
    ErrorStateMatcher,
    mixinDisabled,
    mixinDisableRipple,
    mixinErrorState,
    mixinTabIndex,
} from '@angular/material/core';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Inspired by mat-select code.
// https://github.com/angular/components/blob/master/src/material/select/select.ts

// eslint-disable-next-line @typescript-eslint/naming-convention
const TinyMceMixinBase = mixinDisableRipple(
    mixinTabIndex(
        mixinDisabled(
            mixinErrorState(
                class {
                    constructor(
                        public elementRef: ElementRef,
                        public _defaultErrorStateMatcher: ErrorStateMatcher,
                        public _parentForm: NgForm,
                        public _parentFormGroup: FormGroupDirective,
                        public ngControl: NgControl
                    ) {}
                }
            )
        )
    )
);

@Component({
    selector: 'pme-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
    providers: [{ provide: MatFormFieldControl, useExisting: PmeEditor }],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class PmeEditor
    extends TinyMceMixinBase
    implements ControlValueAccessor, OnInit, DoCheck, OnDestroy, CanUpdateErrorState
{
    static nextId = 0;

    @HostBinding() id = `tiny-mce-input-${PmeEditor.nextId++}`;

    stateChanges = new Subject<void>();
    inputCtrl: FormControl = new FormControl();

    tinyMceInit: Record<string, any> | undefined;
    loadTinyMce = false; // fixes issue described here: https://github.com/tinymce/tinymce-angular/issues/197
    /** The aria-describedby attribute on the select for improved a11y. */
    _ariaDescribedby: string;

    protected _elementClass: string[] = [];
    private _required = false;
    private _focused = false;
    private _placeholder: string;
    private _destroy = new Subject();

    @HostBinding('class')
    get elementClass(): string {
        return this._elementClass.join(' ');
    }
    set(val: string) {
        this._elementClass = val.split(' ');
    }

    @Input()
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    get focused(): boolean {
        return this._focused;
    }
    set focused(focus: boolean) {
        this._focused = focus;
    }

    @Input()
    get required(): boolean {
        return this._required;
    }
    set required(value: boolean) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }

    /** `View -> model callback called when value changes` */
    _onChange: (value: any) => void = () => {};

    /** `View -> model callback called when select has been touched` */
    _onTouched = () => {};

    constructor(
        elementRef: ElementRef,
        defaultErrorStateMatcher: ErrorStateMatcher,
        @Optional() parentForm: NgForm,
        @Optional() parentFormGroup: FormGroupDirective,
        @Optional() @Inject(MAT_FORM_FIELD) protected parentFormField: MatFormField,
        @Self() @Optional() ngControl: NgControl,
        private cdr: ChangeDetectorRef
    ) {
        super(elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
        // this.tinyMceInit = this.appConfig.tinyMceInit;

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }

        this.setClassNames();
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.loadTinyMce = true;
            this.cdr.markForCheck();
        });

        this.inputCtrl.valueChanges.pipe(takeUntil(this._destroy)).subscribe((value: string) => {
            this._onChange(value);
            this.cdr.markForCheck();
        });
    }

    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }

    ngOnDestroy() {
        this.stateChanges.complete();
        this._destroy.next();
        this._destroy.complete();
    }

    writeValue(value: any): void {
        this.inputCtrl.setValue(value);
    }

    registerOnChange(fn: (value: any) => void): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
        this.stateChanges.next();
    }

    setDescribedByIds(ids: string[]) {
        this._ariaDescribedby = ids.join(' ');
    }

    private setClassNames() {
        this._elementClass.push('h-editor');
        // Add class if component is contained inside a mat-form-field
        if (!!this.parentFormField) {
            this._elementClass.push('h-editor-form-field');
        }
    }
}
