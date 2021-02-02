import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from 'src/app/shared/answer.service';
import { Question } from 'src/app/shared/question.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  public questions: Question[] = [];

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.answerService.getAnswers(params['id']).subscribe(data => {
          for (const question of data) {
            this.questions.push(new Question(question));
          }
        });
      }
    });
  }

}
