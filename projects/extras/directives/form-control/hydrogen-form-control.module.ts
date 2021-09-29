import { NgModule } from '@angular/core';
import { ErrorStateMatcher, MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HydrogenFormControl } from './hydrogen-form-control.directive';

@NgModule({
    imports: [MatFormFieldModule, MatCommonModule],
    exports: [HydrogenFormControl, MatFormFieldModule],
    declarations: [HydrogenFormControl],
    providers: [ErrorStateMatcher]
})
export class HydrogenFormControlModule {}
