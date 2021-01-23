import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { ActiveComponent } from './shared/active/active.component';



@NgModule({
  declarations: [FormListComponent, FormEditComponent, ActiveComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormListComponent
  ],
})
export class FormsModule { }
