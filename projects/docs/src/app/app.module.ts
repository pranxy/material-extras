import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './pages/components/components.component';
import { SharedModule } from './shared';

@NgModule({
    declarations: [AppComponent, ComponentsComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
