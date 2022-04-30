import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevAppModule } from './dev-app/dev-app.module';
import { DEV_APP_ROUTES } from './dev-app/routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        DevAppModule,
        RouterModule.forRoot(DEV_APP_ROUTES, { relativeLinkResolution: 'legacy' }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
