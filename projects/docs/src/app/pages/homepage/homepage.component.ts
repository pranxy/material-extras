import { Component, HostBinding, OnInit } from '@angular/core';

const TOP_COMPONENTS = ['select'];

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
    @HostBinding('class.main-content') readonly mainContentClass = true;

    constructor() {}

    ngOnInit() {}

    getTopComponents(): string[] {
        return TOP_COMPONENTS;
    }
}
