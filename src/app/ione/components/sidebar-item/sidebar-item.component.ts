import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Menu } from '../../models/menu.model';
import { IoneState } from '../../stores';
import { SidebarChange } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() menu: Menu;

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }
  handleMenuClick() {
    this.store.dispatch(new SidebarChange(this.menu.uuid));
  }
  get dropdownClass() {
    return of({
      'open': this.menu.open
    });
  }
  get subarLinkClass() {
    return of({
      'active': this.menu.active,
    });
  }
  get hasSubmenus() {
    return of(this.menu.subMenus && this.menu.subMenus.length > 0);
  }
}
