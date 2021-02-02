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

  signInData: SignInData = <SignInData>{};

  constructor(
    private tokenService: AngularTokenService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  onSubmit() {
    this.tokenService.signIn(this.signInData).subscribe(
      res => this.router.navigate(['/forms']), 
      error => {
        this.signInData = <SignInData>{};
        if ( error.status !== 0 ) {
          for (const message of error.error.errors) {
            this.snackBar.open('OneBitForms', message, {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
          }
        } else {
          this.snackBar.open('OneBitForms', 'Connection Error', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        }
      }
    );
  }

}
