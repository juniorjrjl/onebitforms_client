import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar/';
import { Router } from '@angular/router';
import { AngularTokenService, SignInData } from 'angular-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  _signInData: SignInData = <SignInData>{};

  constructor(
    private _tokenService: AngularTokenService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  onSubmit() {
    this._tokenService.signIn(this._signInData).subscribe(
      res => this.router.navigate(['/forms']), 
      error => {
        this._signInData = <SignInData>{};
        if ( error.status !== 0 ) {
          console.log(error)
          for (const message of error.error.errors) {
            this._snackBar.open('OneBitForms', message, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
          }
        } else {
          this._snackBar.open('OneBitForms', 'Connection Error', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        }
      }
    );
  }

}
