import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select-api',
    templateUrl: './select-api.component.html',
    styleUrls: ['./select-api.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectApiComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
