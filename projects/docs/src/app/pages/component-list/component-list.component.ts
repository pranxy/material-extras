import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Params, RouterLink, RouterModule } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { ComponentPageTitle } from '../../services/page-title.service';
import { DocumentationItems, SECTIONS } from '../../shared';

@Component({
    selector: 'app-component-category-list',
    templateUrl: './component-list.component.html',
    styleUrls: ['./component-list.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, AsyncPipe],
})
export default class ComponentListComponent implements OnInit, OnDestroy {
    params: Observable<Params>;
    routeParamSubscription: Subscription;
    categoryListSummary: string | undefined;

    constructor(
        public docItems: DocumentationItems,
        public componentPageTitle: ComponentPageTitle,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.params = combineLatest(
            this.route.pathFromRoot.map((route) => route.params),
            Object.assign
        );

        this.routeParamSubscription = this.params.subscribe((params) => {
            console.log(params);

            const sectionName = params.section;
            const section = SECTIONS[sectionName];
            console.log(section);

            this.componentPageTitle.title = section.name;
            this.categoryListSummary = section.summary;
        });
    }

    ngOnDestroy() {
        if (this.routeParamSubscription) {
            this.routeParamSubscription.unsubscribe();
        }
    }
}

@NgModule({
    imports: [CommonModule, MatCardModule, RouterModule, ComponentListComponent],
    exports: [ComponentListComponent],
    providers: [DocumentationItems],
})
export class ComponentCategoryListModule {}
