import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  createQuestion(form_id, question) {
    return this.http.post('http://localhost:3000/api/v1/questions', {form_id: form_id, question});
  }
 
  updateQuestion(question_id, question_params) {
    return this.http.put(`http://localhost:3000/api/v1/questions/${question_id}`, question_params);
  }
 
  destroyQuestion(question_id) {
    return this.http.delete(`http://localhost:3000/api/v1/questions/${question_id}`);
  }

}
