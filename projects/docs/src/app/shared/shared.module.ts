import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PmeSelectModule } from '@pranxy/material-extras/select';
import { MaterialModule } from '../material-modules';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent];
const modules = [MaterialModule, FlexLayoutModule, PmeSelectModule];

@NgModule({
    imports: [CommonModule, RouterModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
})
export class SharedModule {}
