import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PmeDrawerModule } from 'extras/components/drawer/public-api';
import { DrawerComponent } from './drawer.component';
import { DrawerRoutingModule } from './drawer.routing';

@NgModule({
    declarations: [DrawerComponent],
    imports: [CommonModule, DrawerRoutingModule, PmeDrawerModule, MatButtonModule],
})
export class DrawerModule {}
