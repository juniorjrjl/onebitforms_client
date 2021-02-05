import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as CoreFormsModule }   from '@angular/forms';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FormListComponent, FormEditComponent, ActiveComponent, FormFormComponent, QuestionListComponent, QuestionFormComponent, DialogComponent],
  imports: [
    CommonModule,
    CoreFormsModule,

    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    ColorPickerModule,
    DragDropModule
  ],
  exports: [
    FormListComponent
  ],
})
export class FormsModule { }
