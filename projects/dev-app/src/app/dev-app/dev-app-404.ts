import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [MatButtonModule, RouterLink],
    template: `
        <h1>404</h1>
        <p>This page does not exist</p>
        <a mat-raised-button routerLink="/">Go back to the home page</a>
    `,
    host: { class: 'mat-typography' },
})
export default class DevApp404 {}
