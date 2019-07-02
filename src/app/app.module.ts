import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitParseComponent } from './git-parse/git-parse.component';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';
import { TakeDateService } from './take-date.service';

@NgModule({
  declarations: [
    AppComponent,
    GitParseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TakeDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
