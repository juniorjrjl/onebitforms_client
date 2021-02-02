import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Form } from 'src/app/shared/form.model';
import { FormService } from 'src/app/shared/form.service';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {

  forms: Form[] = [];

  constructor(private formService: FormService, 
              private snackBar: MatSnackBar, 
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.formService.getForms().subscribe(data => {
      for (const form of data){
        this.forms.push(new Form(form));
      }
    });
  }

  deleteForm(form): boolean {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        title: "OneBitForms",
        message: "Your want delete this form?"
      }
    })
    dialogRef.afterClosed().subscribe(confirmed =>{
      if (confirmed){
        this.formService.destroyForm(form.id).subscribe(data => {
          const index = this.forms.indexOf(form);
          this.forms.splice(index, 1);
          this.snackBar.open('OneBitForms', 'Form deleted', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        }, error => 
          this.snackBar.open('OneBitForms', `Error in delete Form ${form.title}`, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'}));  
      }
    })
    return false;
  }

  navigateToPage(url: string){
    this.router.navigateByUrl(url)
  }

}
