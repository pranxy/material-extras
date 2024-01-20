import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

const TOP_COMPONENTS = ['select'];

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    standalone: true,
    imports: [RouterLink],
})
export default class HomepageComponent implements OnInit {
    @HostBinding('class.main-content') readonly mainContentClass = true;

    constructor() {}

    ngOnInit() {}

    getTopComponents(): string[] {
        return TOP_COMPONENTS;
    }
}
