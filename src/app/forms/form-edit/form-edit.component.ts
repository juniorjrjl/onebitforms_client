import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from 'src/app/shared/form.model';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  public form: Form = new Form({primary_color: '#eee', enable: false});

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.getForm(params['id']).subscribe(data => {
          this.form = new Form(data);
        });
      }
    });
  }
}
