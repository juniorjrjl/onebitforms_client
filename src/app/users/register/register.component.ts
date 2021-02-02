import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar/';
import { AngularTokenService, RegisterData } from 'angular-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  registerData: RegisterData = <RegisterData>{};

  constructor(private tokenService: AngularTokenService, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.tokenService.registerAccount(this.registerData).subscribe(
      res => {
        this.registerData = <RegisterData>{};
        this.snackBar.open('OneBitForms', 'Success, please confirm your Email', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
      }, error => {
        this.registerData = <RegisterData>{};
        if ( error.status !== 0 ) {
          for (const message of error.error.errors.full_messages) {
            this.snackBar.open('OneBitForms', message, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
          }
        } else {
          this.snackBar.open('OneBitForms', 'Connection Error', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        }
      }
    );
  }
}