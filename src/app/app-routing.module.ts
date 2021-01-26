import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTokenService } from 'angular-token';
import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'not-found', component: NotFoundComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormListComponent, canActivate: [AngularTokenService]},
  { path: 'forms/:id', component: FormEditComponent, canActivate: [AngularTokenService]},
  { path: 'forms/new', component: FormEditComponent, canActivate: [AngularTokenService]},
  { path: 'answers', component: AnswerNewComponent, canActivate: [AngularTokenService]},
  { path: 'answers/:id', component: AnswerListComponent, canActivate: [AngularTokenService]},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
