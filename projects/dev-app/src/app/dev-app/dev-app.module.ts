import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { DevAppComponent } from './dev-app.component';

@NgModule({
    imports: [SharedModule],
    declarations: [DevAppComponent],
    exports: [DevAppComponent],
})
export class DevAppModule {}
