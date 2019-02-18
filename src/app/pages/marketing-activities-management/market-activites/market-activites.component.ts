import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IonePage } from 'src/app/ione/decorators/ione-page.decorator';
import { QueryGroup } from 'src/app/ione/models/query.model';
import { AppState, selectMarketActivities, selectMarketActivitiesQuerys } from 'src/app/stores';
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

  queryGroup: QueryGroup;
  queryForm: FormGroup = this.fb.group({
    keywords: [''],
    status: [''],
    confirm: [''],
    startTime: [''],
    endTime: [''],
  });

  marketActivities$ = this.store.pipe(
    select(selectMarketActivities)
  );

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(selectMarketActivitiesQuerys)
    ).subscribe(query => {
      this.queryGroup = query;
      this.queryForm = query.formGroup;
    });
    this.store.dispatch(new InitMarketActivities());
  }

  search() {
    this.store.dispatch(new GetMarketActivities({ query: this.queryForm.value }));
  }

}
