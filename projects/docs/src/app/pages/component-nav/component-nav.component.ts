import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Params, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentationItems } from '../../shared';

@Component({
    selector: 'app-component-nav',
    templateUrl: './component-nav.html',
    animations: [
        trigger('bodyExpansion', [
            state('collapsed', style({ height: '0px', display: 'none' })),
            state('expanded', style({ height: '*', display: 'block' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
        ]),
    ],
    standalone: true,
    imports: [CommonModule, MatListModule, RouterLink],
})
export class ComponentNav {
    @Input() params: Observable<Params> | undefined;
    currentItemId: string | undefined;

    constructor(public docItems: DocumentationItems) {}
}
