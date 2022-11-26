import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SoccerComponent } from './soccer/soccer.component';
import { SoccerService } from './soccer/soccer.service';

@NgModule({
  declarations: [
    AppComponent,
    SoccerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SoccerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
