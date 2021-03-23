import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    isExtraScreenSmall: Observable<boolean>;
    isScreenSmall: Observable<boolean>;

    constructor(private _router: Router, breakpoints: BreakpointObserver) {
        this.isExtraScreenSmall = breakpoints
            .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(map(breakpoint => breakpoint.matches));

        this.isScreenSmall = breakpoints
            .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(map(breakpoint => breakpoint.matches));

        this._router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const urlTree = this._router.parseUrl(this._router.url);
                if (urlTree.fragment) {
                    // TODO: Scroll to anchor element
                    setTimeout(() => {
                        const element = document.querySelector('#' + urlTree.fragment);
                        if (element) {
                            element.scrollIntoView(true);
                        }
                    });
                }
            }
        });
    }

    ngOnInit() {}

    toggleSidenav(sidenav: MatSidenav): Promise<MatDrawerToggleResult> {
        return sidenav.toggle();
    }
}
