import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
 
  getForms() {
    return this.http.get('forms').subscribe(res => res);
  }
 
  getForm(form_id) {
    return this.http.get('forms/' + form_id).subscribe(res => res);
  }
 
  createForm(form_params) {
    return this.http.post('forms', form_params).subscribe(res => res);
  }
 
  updateForm(form_id, form_params) {
    return this.http.put(`forms/${form_id}`, form_params).subscribe(res => res);
  }
 
  destroyForm(form_id) {
    return this.http.delete(`forms/${form_id}`).subscribe(res => res);
  }

}
