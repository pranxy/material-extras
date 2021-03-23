import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-modules';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent];

@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule, FlexLayoutModule],
    exports: [CommonModule, MaterialModule, FlexLayoutModule, ...components],
    declarations: [...components],
})
export class SharedModule {}
