import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dev-root',
    template: `
        <pme-dev-app>
            <router-outlet></router-outlet>
        </pme-dev-app>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
