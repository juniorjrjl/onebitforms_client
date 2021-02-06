import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularTokenService, UpdatePasswordData } from 'angular-token';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};

  constructor(private tokenService: AngularTokenService,
    private snackBar: MatSnackBar,
    private router: Router) { 
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.tokenService.updatePassword(this.updatePasswordData).subscribe(
      res => {
        this.snackBar.open('OneBitForms', 'Success to reset your password, try sign in with new password', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'});
        this.router.navigate(['/login'])
      }, 
      error => {
        this.updatePasswordData = <UpdatePasswordData>{};
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
