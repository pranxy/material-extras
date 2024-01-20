import { ChangeDetectionStrategy, Component, HostBinding, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatButtonModule, RouterLink],
})
export class NotFoundComponent {
    @HostBinding('class.main-content') readonly mainContentClass = true;
}

const routes: Routes = [{ path: '', component: NotFoundComponent }];

@NgModule({
    imports: [MatButtonModule, RouterModule.forChild(routes), NotFoundComponent],
    exports: [NotFoundComponent],
})
export default class NotFoundModule {}
