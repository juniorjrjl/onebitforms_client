import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Form } from 'src/app/shared/form.model';
import { FormService } from 'src/app/shared/form.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  @Input() form: Form;

  constructor(private formService: FormService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  toggleEnable() {
    this.formService.updateForm(this.form.id, this.form).subscribe(data => 
      this.snackBar.open('OneBitForms', this.form.enable ? 'Form enabled' : 'Form disabled', 
        {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
    , error => 
      this.snackBar.open('OneBitForms', this.form.enable ? 'Error in enable Form' : 'Error in disable Form', 
        {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
    );
  }
}