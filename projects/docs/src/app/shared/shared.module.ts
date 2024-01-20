import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PmeSelectModule } from 'extras/components/select';
import { MaterialModule } from '../material-modules';
import { CopierService } from './copier/copier.service';
import { DocViewer } from './doc-viewer/doc-viewer';
import { ExampleViewer } from './example-viewer/example-viewer';
import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent, ExampleViewer, DocViewer];
const modules = [MaterialModule, PmeSelectModule];

@NgModule({
    imports: [CommonModule, RouterModule, ...modules],
    exports: [...modules, ...components],
    declarations: [...components],
    providers: [CopierService],
})
export class SharedModule {}
