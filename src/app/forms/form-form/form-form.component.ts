import { Component, Input, OnInit } from '@angular/core';

import { FormService } from 'src/app/shared/form.service';
import { Form } from 'src/app/shared/form.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-form',
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.scss']
})
export class FormFormComponent implements OnInit {
  
  @Input() form: Form;

  constructor(
              private formService: FormService,
              private snackBar: MatSnackBar,
              private router: Router
              ) { }

  ngOnInit() { }

  onSubmit(f) {
    if (this.form.id) {
      this.formService.updateForm(this.form.id, this.form).subscribe(data =>
        this.snackBar.open('OneBitForms','Form updated', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'}), 
        error =>
          this.snackBar.open('OneBitForms','Problem in Form creation', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
      );
    } else {
      this.formService.createForm(this.form).subscribe(data => {
        this.router.navigate(['/forms/' + data['slug']]);
      }, error => 
        this.snackBar.open('OneBitForms','Problem in Form creation', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
      );
    }
  }

  navigateToPage(url: string){
    this.router.navigateByUrl(url)
  }

}
