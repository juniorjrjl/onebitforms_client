import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tokenService: AngularTokenService

  constructor(tokenService: AngularTokenService, private router: Router, private snackBar: MatSnackBar) { 
    this.tokenService = tokenService;
  }

  ngOnInit(): void {
  }

  navigateToPage(url: string){
    this.router.navigateByUrl(url)
  }

  signOut() {
    this.tokenService.signOut().subscribe(
      res =>      { },
      error =>    this.snackBar.open('OneBitForms', 'Error in Logout', {duration: 8000, verticalPosition: 'top', horizontalPosition: 'end'})
    );
  }

}
