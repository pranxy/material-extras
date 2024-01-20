import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentPageTitle } from '../../services/page-title.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'component-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
})
export class PageHeaderComponent {
    constructor(public componentPageTitle: ComponentPageTitle) {}

    @Output() toggleSidenav = new EventEmitter<void>();

    getTitle() {
        return this.componentPageTitle.title;
    }
}

@NgModule({
    imports: [MatButtonModule, MatIconModule, PageHeaderComponent],
    exports: [PageHeaderComponent],
})
export class ComponentHeaderModule {}
