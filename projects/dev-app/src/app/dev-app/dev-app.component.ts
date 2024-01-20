import { DOCUMENT, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

const isDarkThemeKey = 'ANGULAR_COMPONENTS_DEV_APP_DARK_THEME';

@Component({
    selector: 'pme-dev-app',
    templateUrl: './dev-app.component.html',
    styleUrls: ['./dev-app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatSidenavModule,
        MatListModule,
        NgFor,
        RouterLinkActive,
        RouterLink,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],
})
export class DevAppComponent {
    readonly darkThemeClass = 'demo-unicorn-dark-theme';
    _isDark = false;
    strongFocus = false;
    navItems = [
        // { name: 'Alert', route: '/alert' },
        // { name: 'Button', route: '/button' },
        // { name: 'Color Picker', route: '/colorpicker' },
        // { name: 'Checkbox Group', route: '/checkbox-group' },
        // { name: 'Data Grid', route: '/grid' },
        // { name: 'Datetimepicker', route: '/datetimepicker' },
        // { name: 'Dialog', route: '/dialog' },
        // { name: 'Drawer', route: '/drawer' },
        // { name: 'Form Group', route: '/form-group' },
        // { name: 'Loader', route: '/loader' },
        { name: 'Popover', route: '/popover' },
        // { name: 'Progress', route: '/progress' },
        // { name: 'Select', route: '/select' },
        // { name: 'Slider', route: '/slider' },
        // { name: 'Split Pane', route: '/split' },
        // { name: 'Text 3D', route: '/text3d' },
        // { name: 'Tooltip', route: '/tooltip' },
    ];

    /** Currently selected density scale based on the index. */
    currentDensityIndex = 0;

    /** List of possible global density scale values. */
    densityScales = [0, -1, -2, 'minimum', 'maximum'];

    constructor(
        private _element: ElementRef<HTMLElement>,
        cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) private _document: Document
    ) {
        try {
            const isDark = localStorage.getItem(isDarkThemeKey);
            if (isDark != null) {
                // We avoid calling the setter and apply the themes directly here.
                // This avoids writing the same value, that we just read, back to localStorage.
                this._isDark = isDark === 'true';
                this.updateThemeClass(this._isDark);
            }
        } catch (error) {
            console.error(`Failed to read ${isDarkThemeKey} from localStorage: `, error);
        }
    }

    get isDark(): boolean {
        return this._isDark;
    }

    set isDark(value: boolean) {
        // Noop if the value is the same as is already set.
        if (value !== this._isDark) {
            this._isDark = value;
            this.updateThemeClass(this._isDark);

            try {
                localStorage.setItem(isDarkThemeKey, String(value));
            } catch (error) {
                console.error(`Failed to write ${isDarkThemeKey} to localStorage: `, error);
            }
        }
    }

    toggleFullscreen() {
        // Cast to `any`, because the typings don't include the browser-prefixed methods.
        const elem = this._element.nativeElement.querySelector('.demo-content') as any;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    }

    updateThemeClass(isDark?: boolean) {
        if (isDark) {
            this._document.body.classList.add(this.darkThemeClass);
        } else {
            this._document.body.classList.remove(this.darkThemeClass);
        }
    }

    toggleStrongFocus() {
        const strongFocusClass = 'demo-strong-focus';

        this.strongFocus = !this.strongFocus;

        if (this.strongFocus) {
            this._document.body.classList.add(strongFocusClass);
        } else {
            this._document.body.classList.remove(strongFocusClass);
        }
    }
}
