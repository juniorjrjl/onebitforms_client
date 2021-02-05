import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from 'src/app/shared/question.model';
import { QuestionService } from 'src/app/shared/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[];
  @Input() form_id: number;
  public question_new: Question = new Question({});

  constructor(private questionService: QuestionService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
    this.questions.forEach((question, index) => {
      question.order = index;
      this.updateOrder(question)
    });
  }

  private updateOrder(question: Question){
    this.questionService.updateQuestion(question.id, question).subscribe(data => 
      this.snackBar.open('OneBitForms', 'Question order updated', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
    , error => 
    this.snackBar.open('OneBitForms', 'Problem in Question update', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'}));
  }

}
