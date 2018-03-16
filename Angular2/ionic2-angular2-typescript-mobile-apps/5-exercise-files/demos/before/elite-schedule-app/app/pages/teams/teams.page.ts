import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'build/pages/teams/teams.page.html',
})
export class TeamsPage {
  teams = [];
  // teams = [
  //   { id: 1, name: 'HC Elite' },
  //   { id: 2, name: 'Team Takeover' },
  //   { id: 3, name: 'DC Thunder' }
  // ]; 

  constructor(private nav: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi) { }

  ionViewLoaded(){
    let selectedTourney = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team); 
  }
}
