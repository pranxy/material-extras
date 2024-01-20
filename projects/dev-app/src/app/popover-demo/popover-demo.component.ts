import { Component } from '@angular/core';
import { SHARED_MODULE } from '../shared';

@Component({
    selector: 'pme-popover-demo',
    standalone: true,
    imports: [...SHARED_MODULE],
    templateUrl: './popover-demo.component.html',
    styleUrls: ['./popover-demo.component.scss'],
})
export default class PopoverDemoComponent {}
