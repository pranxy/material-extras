import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent }];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatDividerModule,
        MatCardModule,
    ],
    declarations: [HomepageComponent],
})
export class HomepageModule {}
