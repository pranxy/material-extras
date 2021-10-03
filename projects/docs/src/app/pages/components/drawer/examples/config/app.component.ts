import { Component } from '@angular/core';
import { PmeDrawerService } from '@pranxy/material-extras/components/drawer';

@Component({
    template: '<h2>test component</h2>',
})
export class TestComponent {}

@Component({
    selector: 'select-example',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private service: PmeDrawerService) {}

    drawer() {
        this.service.open(TestComponent);
    }
}
