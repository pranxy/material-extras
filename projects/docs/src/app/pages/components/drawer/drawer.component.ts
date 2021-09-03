import { Component, OnInit } from '@angular/core';
import { PmeDrawerService } from 'extras/components/drawer/public-api';

@Component({
    template: '<h2>test component</h2>',
})
export class TestComponent {}

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
    constructor(private service: PmeDrawerService) {}

    ngOnInit(): void {}

    drawer() {
        this.service.open(TestComponent).afterClosed().subscribe();
    }
}
