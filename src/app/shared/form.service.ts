import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
 
  getForms() {
    return this.http.get<string>('http://localhost:3000/api/v1/forms');
  }
 
  getForm(form_id) {
    return this.http.get('http://localhost:3000/api/v1/forms/' + form_id);
  }
 
  createForm(form_params) {
    return this.http.post('http://localhost:3000/api/v1/forms', form_params);
  }
 
  updateForm(form_id, form_params) {
    return this.http.put(`http://localhost:3000/api/v1/forms/${form_id}`, form_params);
  }
 
  destroyForm(form_id) {
    return this.http.delete(`http://localhost:3000/api/v1/forms/${form_id}`);
  }

}
