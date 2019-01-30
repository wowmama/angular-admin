import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Menu } from '../../models/menu.model';
import { IoneState } from '../../stores';
import { AciteSidebarItem, ToggleSidebarItem } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent implements OnInit {

  @Input() menu: Menu;

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }
  handleMenuClick() {
    if (this.menu.link) {
      this.store.dispatch(new AciteSidebarItem(this.menu.uuid));
    } else {
      this.store.dispatch(new ToggleSidebarItem(this.menu.uuid));
    }
  }
  get dropdownClass() {
    return of({
      'dropdown': this.menu.subMenus && this.menu.subMenus.length > 0,
      'open': this.menu.open,
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
