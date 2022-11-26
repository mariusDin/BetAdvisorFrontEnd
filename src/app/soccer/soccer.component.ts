import { Component } from '@angular/core';
import { SoccerService } from './soccer.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.scss']
})

export class SoccerComponent {

  title = "Today's matches";
  todayMatches;

  constructor(service: SoccerService){
    this.todayMatches = service.getTodayMatches();
  }

}