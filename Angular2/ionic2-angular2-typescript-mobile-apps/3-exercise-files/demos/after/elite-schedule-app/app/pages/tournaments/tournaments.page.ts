import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';

@Component({
  templateUrl: 'build/pages/tournaments/tournaments.page.html',
})
export class TournamentsPage {

  constructor(private nav: NavController) {

  }

  itemTapped(){
    this.nav.push(TeamsPage); 
  }
}
