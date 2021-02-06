import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularTokenService, ResetPasswordData } from 'angular-token';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.scss']
})
export class ResetPasswordRequestComponent implements OnInit {

  resetPasswordData: ResetPasswordData = <ResetPasswordData>{};

  constructor(
    private tokenService: AngularTokenService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.tokenService.resetPassword(this.resetPasswordData).subscribe(
      res => {
        this.snackBar.open('OneBitForms', 'Success to request password reset, please verify your email', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        this.router.navigate(['/'])
      }, 
      error => {
        this.resetPasswordData = <ResetPasswordData>{};
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
