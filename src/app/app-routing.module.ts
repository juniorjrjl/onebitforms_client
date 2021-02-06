import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ResetPasswordRequestComponent } from './users/reset-password-request/reset-password-request.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'thank-you', component: ThankYouComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormListComponent, canActivate: [AngularTokenService]},
  { path: 'forms/new', component: FormEditComponent, canActivate: [AngularTokenService]},
  { path: 'forms/:id', component: FormEditComponent, canActivate: [AngularTokenService]},
  { path: 'answers/:id/new', component: AnswerNewComponent, canActivate: [AngularTokenService]},
  { path: 'answers/:id', component: AnswerListComponent, canActivate: [AngularTokenService]},
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password-request', component: ResetPasswordRequestComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
