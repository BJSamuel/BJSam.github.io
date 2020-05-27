import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainResumeComponent } from './main-resume/main-resume.component';
import { RMenuComponent } from './rmenu/rmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainResumeComponent,
    RMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
