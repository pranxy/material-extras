import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-modules';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [CommonModule, MaterialModule, ...components],
    declarations: [...components],
})
export class SharedModule {}
