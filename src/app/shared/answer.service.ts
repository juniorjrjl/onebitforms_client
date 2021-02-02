import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  getAnswers(form_id) {
    let params = new HttpParams();
    params = params.set('form_id', form_id);
    return this.http.get<String>('http://localhost:3000/api/v1/answers', { params });
  }
 
  getAnswer(answer_id) {
    return this.http.get(`http://localhost:3000/api/v1/answers/${answer_id}`);
  }
 
  createAnswer(answer_params) {
    return this.http.post('http://localhost:3000/api/v1/answers', answer_params);
  }
 
  destroyAnswer(answer_id) {
    return this.http.delete(`http://localhost:3000/api/v1/answers/${answer_id}`);
  }

}
