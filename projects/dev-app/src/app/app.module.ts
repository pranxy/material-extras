import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DevAppComponent } from './dev-app/dev-app.component';
import { DEV_APP_ROUTES } from './dev-app/routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(DEV_APP_ROUTES, {}),
        DevAppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
