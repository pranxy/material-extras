import { NgModule } from '@angular/core';
import { DevAppComponent } from './dev-app.component';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [DevAppComponent],
    exports: [DevAppComponent],
})
export class DevAppModule {}
