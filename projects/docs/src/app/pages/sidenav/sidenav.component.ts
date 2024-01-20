import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentationItems } from '../../shared';
import { ComponentNav } from '../component-nav/component-nav.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

const EXTRA_SMALL_WIDTH_BREAKPOINT = 720;
const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [CommonModule, RouterModule, MatSidenavModule, ComponentNav, PageHeaderComponent],
    providers: [DocumentationItems],
})
export default class ComponentSidenav implements OnInit, OnDestroy {
    @ViewChild(MatSidenav) sidenav!: MatSidenav;

    isExtraScreenSmall: Observable<boolean>;
    isScreenSmall: Observable<boolean>;
    params: Observable<Params> | undefined;

    private subscriptions = new Subscription();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        breakpoints: BreakpointObserver,
        // private _navigationFocusService: NavigationFocusService,
        public docItems: DocumentationItems
    ) {
        this.isExtraScreenSmall = breakpoints
            .observe(`(max-width: ${EXTRA_SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(map((breakpoint) => breakpoint.matches));
        this.isScreenSmall = breakpoints
            .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
            .pipe(map((breakpoint) => breakpoint.matches));
    }

    ngOnInit() {
        this.params = combineLatest(
            this.route.pathFromRoot.map((route) => route.params),
            Object.assign
        );

        // this.subscriptions.add(
        //     this._navigationFocusService.navigationEndEvents
        //         .pipe(map(() => this.isScreenSmall))
        //         .subscribe(shouldCloseSideNav => {
        //             if (shouldCloseSideNav && this.sidenav) {
        //                 this.sidenav.close();
        //             }
        //         })
        // );
    }

    toggleSidenav(sidenav: MatSidenav): Promise<MatDrawerToggleResult> {
        return sidenav.toggle();
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
