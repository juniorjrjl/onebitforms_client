import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from 'src/app/shared/question.model';
import { QuestionService } from 'src/app/shared/question.service';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];
  @Input() form_id: number;

  constructor(
    private questionService: QuestionService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (this.question.id) {
      this.questionService.updateQuestion(this.question.id, this.question).subscribe(data => 
        this.snackBar.open('OneBitForms', 'Question updated', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
      , error => 
      this.snackBar.open('OneBitForms', 'Problem in Question update', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'}));
    } else {
      this.questionService.createQuestion(this.form_id, this.question).subscribe(data => {
        this.questions.push(new Question(data));
        this.question = new Question({});
      }, error => 
        this.snackBar.open('OneBitForms', 'Problem in Question creation', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
      );
    }
  }

  deleteQuestion(): boolean {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        title: "OneBitForms",
        message: "Your want delete this question?"
      }
    })
    dialogRef.afterClosed().subscribe(confirmed =>{
      if (confirmed){
        this.questionService.destroyQuestion(this.question.id).subscribe(data => {
          const index = this.questions.indexOf (this.question);
          this.questions.splice(index, 1);
          this.snackBar.open('OneBitForms', 'question deleted', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
        }, error => 
          this.snackBar.open('OneBitForms', `Error in delete question ${this.question.title}`, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
        );      
      }
    });
    return false;
  }
}
