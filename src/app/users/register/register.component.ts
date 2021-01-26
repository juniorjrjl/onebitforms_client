import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar/';
import { AngularTokenService, RegisterData } from 'angular-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  _registerData: RegisterData = <RegisterData>{};

  constructor(private _tokenService: AngularTokenService, private _snackBar: MatSnackBar) { }

  onSubmit() {
    this._tokenService.registerAccount(this._registerData).subscribe(
      res => {
        this._registerData = <RegisterData>{};
        this._snackBar.open('OneBitForms', 'Success, please confirm your Email', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
      }, error => {
        this._registerData = <RegisterData>{};
        if ( error.status !== 0 ) {
          for (const message of error.error.errors.full_messages) {
            this._snackBar.open('OneBitForms', message, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
          }
        } else {
          this._snackBar.open('OneBitForms', 'Connection Error', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        }
      }
    );
  }
}