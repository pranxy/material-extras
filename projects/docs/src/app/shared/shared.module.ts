import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PmeSelectModule } from 'extras/components/select';
import { MaterialModule } from '../material-modules';
import { CopierService } from './copier/copier.service';
import { ExampleViewer } from './example-viewer/example-viewer';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent, ExampleViewer];
const modules = [MaterialModule, FlexLayoutModule, PmeSelectModule];

@NgModule({
    imports: [CommonModule, RouterModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
    providers: [CopierService],
})
export class SharedModule {}
