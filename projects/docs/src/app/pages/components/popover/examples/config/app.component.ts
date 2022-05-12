import { Component } from '@angular/core';
import { PmeDrawerService } from '@pranxy/material-extras/components/drawer';

@Component({
    selector: 'select-example',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor() {}

    drawer() {
        // this.service.open(TestComponent);
    }
}
