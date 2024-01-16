import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DevAppModule } from './dev-app/dev-app.module';
import { DEV_APP_ROUTES } from './dev-app/routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DevAppModule,
        RouterModule.forRoot(DEV_APP_ROUTES, {}),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
