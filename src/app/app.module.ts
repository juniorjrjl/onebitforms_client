import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { FormService } from './shared/form.service';
import { QuestionService } from './shared/question.service';
import { AnswerService } from './shared/answer.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    MatInputModule,
    AngularTokenModule.forRoot({
      apiPath: 'http://localhost:3000/api/v1',
      signInRedirect: '/login',
      resetPasswordCallback: 'http://localhost:4200/reset-password'
    })
  ],
  exports: [
  ],
  providers: [
    AngularTokenModule,
    FormService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
