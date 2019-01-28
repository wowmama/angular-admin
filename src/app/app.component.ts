import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadMenus } from './ione/stores/actions/menu.action';
import { MENUS } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc';
  constructor(
    private store: Store<any>
  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(new LoadMenus(MENUS));
  }
}
