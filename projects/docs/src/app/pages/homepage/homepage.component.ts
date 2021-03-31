import { Component, OnInit } from '@angular/core';
import { COMPONENTS_MENU } from '../component-nav/component-nav.component';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
    components = COMPONENTS_MENU;
    constructor() {}

    ngOnInit() {}
}
