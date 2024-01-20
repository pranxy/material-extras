import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DIRECTIVES_MENU } from './directives-menu';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterLink],
})
export class DirectivesComponent implements OnInit {
    list = DIRECTIVES_MENU;

    constructor() {}

    ngOnInit(): void {}
}
