import { Component } from '@angular/core';
import { PmeDrawerRef, PmeDrawerService } from '@pranxy/material-extras/components/drawer';

@Component({
    template: `
        <h2>Test drawer callback</h2>

        <button mat-button (click)="close()">Close</button>
    `,
})
export class TestComponent {
    constructor(public drawerRef: PmeDrawerRef<string>) {}

    close() {
        this.drawerRef.close('Dogs!');
    }
}

@Component({
    selector: 'select-example',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(private service: PmeDrawerService) {}

    drawer() {
        this.service
            .open(TestComponent)
            .afterClosed()
            .subscribe(result => {
                console.log(result);

                console.log(`Drawer result: ${result}`); // Dogs!
            });
    }
}
