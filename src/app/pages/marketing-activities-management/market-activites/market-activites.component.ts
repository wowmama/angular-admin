import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IonePage } from 'src/app/ione/decorators/ione-page.decorator';
import { AppState, selectMarketActivities } from 'src/app/stores';
import { GetMarketActivities, InitMarketActivities } from 'src/app/stores/actions/market-activities.action';

@IonePage({
  name: '营销活动维护',
  breadcrumbs: ['营销活动管理', '营销活动维护'],
})
@Component({
  selector: 'app-market-activites',
  templateUrl: './market-activites.component.html',
  styleUrls: ['./market-activites.component.scss']
})
export class MarketActivitesComponent implements OnInit {

  marketActivities$ = this.store.pipe(
    select(selectMarketActivities)
  );

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new InitMarketActivities());
  }

  search() {
    this.store.dispatch(new GetMarketActivities({
      query: {}
    }));
  }

}
