import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/shared/answer.model';
import { AnswerService } from 'src/app/shared/answer.service';
import { Form } from 'src/app/shared/form.model';
import { FormService } from 'src/app/shared/form.service';
import { QuestionService } from 'src/app/shared/question.service';
import { QuestionsAnswer } from 'src/app/shared/questions_answer.model';

@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.scss']
})
export class AnswerNewComponent implements OnInit {

  public form: Form = new Form({});
  public answer: Answer;
  public questions_answer: QuestionsAnswer;


  constructor(
    private formService: FormService,
    private snackBar: MatSnackBar,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.getForm(params['id']).subscribe(data => {
          this.form = new Form(data);
          this.answer = new Answer({form_id: this.form.id});
          for (const question of this.form.questions) {
            this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
          }
        });
      }
    });
  }

  onSubmit(f) {
    console.log(f)
    console.log(this.answer)
    this.answerService.createAnswer(this.answer).subscribe(data => {
      this.snackBar.open('OneBitForms','Answer send with sucess', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
      this.answer = new Answer({form_id: this.form.id});
      for (const question of this.form.questions) {
        this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
      }
      this.router.navigateByUrl('thank-you')
    }, error => this.snackBar.open('OneBitForms','Problem in send answer', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'}));
  }

  clearRadio(i){
    this.answer.questions_answers[i].value = undefined;
  }

}