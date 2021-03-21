import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    dark = false;

    constructor() {}

    ngOnInit() {}

    toggleTheme() {
        this.dark = !this.dark;
        // this._appThemes.value = this.dark ? 'docs-theme-dark' : 'docs-theme-light';
    }
}
