import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LoadMenus } from './ione/stores/actions/menu.action';
import { MENUS } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(new LoadMenus(MENUS));
  }
}
