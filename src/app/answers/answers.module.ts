import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as CoreFormsModule }   from '@angular/forms';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';
import { IndividualDetailsComponent } from './shared/individual-details/individual-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [AnswerListComponent, AnswerNewComponent, GraphNumberComponent, GraphTextComponent, GraphBooleanComponent, IndividualDetailsComponent],
  imports: [
    CommonModule,
    CoreFormsModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatRadioModule
  ]
})
export class AnswersModule { }
