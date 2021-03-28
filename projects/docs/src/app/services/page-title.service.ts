import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Service responsible for setting the title that appears above the components and guide pages.
 */
@Injectable({ providedIn: 'root' })
export class ComponentPageTitle {
    localTitle = '';
    originalTitle = 'Angular Material Extras library';

    get title(): string {
        return this.localTitle;
    }

    set title(title: string) {
        this.localTitle = title && this.capitalizeTitle(title);
        if (title !== '') {
            title = `${this.localTitle} | Angular Material Extras`;
        } else {
            title = this.originalTitle;
        }
        this.bodyTitle.setTitle(title);
    }

    constructor(private bodyTitle: Title) {}

    private capitalizeTitle(title: string): string {
        return title
            .split('-')
            .join(' ')
            .replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1));
    }
}
