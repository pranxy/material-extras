import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    Directive,
    NgModule,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, skip, takeUntil } from 'rxjs/operators';
import { ComponentPageTitle } from '../../services/page-title.service';
import { DocItem, DocumentationItems } from '../../shared';

@Component({
    selector: 'app-component-viewer',
    templateUrl: './component-viewer.html',
    styleUrls: ['./component-viewer.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ComponentViewer implements OnDestroy {
    componentDocItem = new ReplaySubject<DocItem>(1);
    sections: Set<string> = new Set(['overview', 'api']);
    private destroyed = new Subject();
    componentId = '';

    constructor(
        _route: ActivatedRoute,
        private router: Router,
        public componentPageTitle: ComponentPageTitle,
        public docItems: DocumentationItems
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
        // const routeAndParentParams = [_route.params];
        // if (_route.parent) {
        //     routeAndParentParams.push(_route.parent.params);
        // } // Listen to changes on the current route for the doc id (e.g. button/checkbox) and the
        // // parent route for the section (material/cdk).
        // combineLatest(routeAndParentParams)
        //     .pipe(
        //         map((params: Params[]) => ({ id: params[0].id, section: params[1].section })),
        //         map(
        //             (docIdAndSection: { id: string; section: string }) => ({
        //                 doc: docItems.getItemById(docIdAndSection.id, docIdAndSection.section),
        //                 section: docIdAndSection.section,
        //             }),
        //             takeUntil(this.destroyed)
        //         )
        //     )
        //     .subscribe((docItemAndSection: { doc: DocItem | undefined; section: string }) => {
        //         console.log(1);

        //         if (docItemAndSection.doc !== undefined) {
        //             this.componentDocItem.next(docItemAndSection.doc);
        //             this.componentPageTitle.title = `${docItemAndSection.doc.name}`;

        //             if (docItemAndSection.doc.examples && docItemAndSection.doc.examples.length) {
        //                 this.sections.add('examples');
        //             } else {
        //                 this.sections.delete('examples');
        //             }
        //         } else {
        //             console.log('/' + docItemAndSection.section);

        //             this.router.navigate(['/' + docItemAndSection.section]);
        //         }
        //     });
    }
    ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }
}

/**
 * Base component class for views displaying docs on a particular component (overview, API,
 * examples). Responsible for resetting the focus target on doc item changes and resetting
 * the table of contents headers.
 */
@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class ComponentBaseView implements OnInit, OnDestroy {
    // @ViewChild('toc') tableOfContents!: TableOfContents;
    // @ViewChildren(DocViewer) viewers!: QueryList<DocViewer>;

    showToc: Observable<boolean>;
    private destroyed = new Subject();

    constructor(
        public componentViewer: ComponentViewer,
        breakpointObserver: BreakpointObserver,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.showToc = breakpointObserver.observe('(max-width: 1200px)').pipe(
            map(result => {
                this.changeDetectorRef.detectChanges();
                return !result.matches;
            })
        );
    }

    ngOnInit() {
        this.componentViewer.componentDocItem.pipe(takeUntil(this.destroyed)).subscribe(() => {
            // if (this.tableOfContents) {
            //     this.tableOfContents.resetHeaders();
            // }
        });

        this.showToc.pipe(skip(1), takeUntil(this.destroyed)).subscribe(() => {
            // if (this.tableOfContents) {
            //     this.viewers.forEach(viewer => {
            //         viewer.contentRendered.emit(viewer._elementRef.nativeElement);
            //     });
            // }
        });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    updateTableOfContents(sectionName: string, docViewerContent: HTMLElement, sectionIndex = 0) {
        // if (this.tableOfContents) {
        //     this.tableOfContents.addHeaders(sectionName, docViewerContent, sectionIndex);
        //     this.tableOfContents.updateScrollPosition();
        // }
    }
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'component-overview',
    templateUrl: './component-overview.html',
    encapsulation: ViewEncapsulation.None,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ComponentOverview extends ComponentBaseView {
    constructor(
        componentViewer: ComponentViewer,
        breakpointObserver: BreakpointObserver,
        changeDetectorRef: ChangeDetectorRef
    ) {
        super(componentViewer, breakpointObserver, changeDetectorRef);
    }

    getOverviewDocumentUrl(doc: DocItem) {
        // Use the explicit overview path if specified. Otherwise, compute an overview path based
        // on the package name and doc item id. Overviews for components are commonly stored in a
        // folder named after the component while the overview file is named similarly. e.g.
        //    `cdk#overlay`     -> `cdk/overlay/overlay.md`
        //    `material#button` -> `material/button/button.md`
        const overviewPath = doc.overviewPath || `${doc.packageName}/${doc.id}/${doc.id}.html`;
        return `/docs-content/overviews/${overviewPath}`;
    }
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'component-api',
    templateUrl: './component-api.html',
    styleUrls: ['./component-api.scss'],
    encapsulation: ViewEncapsulation.None,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ComponentApi extends ComponentBaseView {
    constructor(
        componentViewer: ComponentViewer,
        breakpointObserver: BreakpointObserver,
        changeDetectorRef: ChangeDetectorRef
    ) {
        super(componentViewer, breakpointObserver, changeDetectorRef);
    }

    getApiDocumentUrl(doc: DocItem) {
        const apiDocId = doc.apiDocId || `${doc.packageName}-${doc.id}`;
        return `/docs-content/api-docs/${apiDocId}.html`;
    }
}

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'component-examples',
    templateUrl: './component-examples.html',
    encapsulation: ViewEncapsulation.None,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ComponentExamples extends ComponentBaseView {
    constructor(
        componentViewer: ComponentViewer,
        breakpointObserver: BreakpointObserver,
        changeDetectorRef: ChangeDetectorRef
    ) {
        super(componentViewer, breakpointObserver, changeDetectorRef);
    }
}

@NgModule({
    imports: [
        MatTabsModule,
        RouterModule,
        // DocViewerModule,
        CommonModule,
        // TableOfContentsModule,
        // NavigationFocusModule,
    ],
    exports: [ComponentViewer],
    declarations: [ComponentViewer, ComponentOverview, ComponentApi, ComponentExamples],
    providers: [DocumentationItems],
})
export class ComponentViewerModule {}
