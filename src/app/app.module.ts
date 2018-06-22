import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { TrusteesComponent } from './trustees/trustees.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, TrusteesComponent, StudentComponent
  ],
  imports: [
    BrowserModule,
    // AppBootstrapModule
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
