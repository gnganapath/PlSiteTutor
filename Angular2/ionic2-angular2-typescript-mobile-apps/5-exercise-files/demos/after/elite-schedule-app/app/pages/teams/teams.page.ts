import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'build/pages/teams/teams.page.html',
})
export class TeamsPage {
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
 

  constructor(private loadingController: LoadingController,
              private nav: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi) { }

  ionViewLoaded(){
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions =
            _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();

        this.teams = this.allTeamDivisions;
        console.log('division teams', this.teams); 
        loader.dismiss();
      });
    });
    
  }

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team); 
  }
}
