import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { SharedModule } from './shared';

@NgModule({
    declarations: [AppComponent, DirectivesComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
