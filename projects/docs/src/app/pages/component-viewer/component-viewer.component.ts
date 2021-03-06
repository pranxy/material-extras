import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ComponentPageTitle } from '../../services/page-title.service';

@Component({
    selector: 'app-component-viewer',
    templateUrl: './component-viewer.component.html',
    styleUrls: ['./component-viewer.component.scss'],
})
export class ComponentViewerComponent implements OnDestroy {
    sections: Set<string> = new Set(['overview', 'api']);
    private destroyed = new Subject();

    componentId = '';

    constructor(
        _route: ActivatedRoute,
        private router: Router,
        public componentPageTitle: ComponentPageTitle
    ) {
        const routeAndParentParams = [_route.params];
        if (_route.parent) {
            routeAndParentParams.push(_route.parent.params);
        }

        this.router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                this.componentId = s.url.split('/')[2];
                this.componentPageTitle.title = this.componentId;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
