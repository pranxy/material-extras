import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { PmeEditor } from './editor.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule],
    exports: [PmeEditor, MatFormFieldModule],
    declarations: [PmeEditor],
    // providers: [
    //     {
    //         provide: TINYMCE_SCRIPT_SRC,
    //         useValue: 'assets/tinymce/tinymce.min.js'
    //     }
    // ]
})
export class PmeEditorModule {}
