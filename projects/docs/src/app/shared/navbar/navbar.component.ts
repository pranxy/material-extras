import { Component, OnInit } from '@angular/core';
import { SECTIONS } from '../documentation-items';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    dark = false;

    constructor() {}

    ngOnInit() {}

    get sections() {
        return SECTIONS;
    }

    get sectionKeys() {
        return SECTIONS_KEYS;
    }

    toggleTheme() {
        this.dark = !this.dark;
        // this._appThemes.value = this.dark ? 'docs-theme-dark' : 'docs-theme-light';
    }
}
