import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'build/pages/standings/standings.page.html',
})
export class StandingsPage {
  allStandings: any[];
  standings: any[];
  team: any;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private eliteApi: EliteApi) { }

  ionViewLoaded() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings =
      _.chain(this.standings)
       .groupBy('division')
       .toPairs()
       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
       .value();

    console.log('standings:', this.standings); 
    console.log('division Standings', this.allStandings);
  }
}
