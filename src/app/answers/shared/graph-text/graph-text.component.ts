import { Component, Input, OnInit } from '@angular/core';
import { QuestionsAnswer } from 'src/app/shared/questions_answer.model';

@Component({
  selector: 'app-graph-text',
  templateUrl: './graph-text.component.html',
  styleUrls: ['./graph-text.component.scss']
})
export class GraphTextComponent implements OnInit {

  @Input() questions_answers: QuestionsAnswer[];
  public answers = [];

  constructor() { }

  ngOnInit() {
    for (const qa of this.questions_answers) {
      if (qa.value != null) {
        this.answers.push(qa.value);
      }
    }
  }

}
