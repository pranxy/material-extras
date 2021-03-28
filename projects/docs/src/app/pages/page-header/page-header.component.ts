import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentPageTitle } from '../../services/page-title.service';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
    constructor(public componentPageTitle: ComponentPageTitle) {}

    @Output() toggleSidenav = new EventEmitter<void>();

    getTitle() {
        return this.componentPageTitle.title;
    }
}
