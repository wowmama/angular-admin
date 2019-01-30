import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { IoneState, seleceTabs } from '../../stores';
import { AciteSidebarItem, CloseTab } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @ViewChild('tabsInner') tabsInner: ElementRef;

  tabs = this.store.pipe(
    select(seleceTabs),
    takeUntil(this.destroyed$)
  );

  constructor(
    private renderer: Renderer2,
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
    fromEvent(this.tabsInner.nativeElement, 'wheel').pipe(
      takeUntil(this.destroyed$)
    ).subscribe(($event: WheelEvent) => {
      this.renderer.setProperty(
        this.tabsInner.nativeElement,
        'scrollLeft',
        `${this.tabsInner.nativeElement.scrollLeft + $event.deltaY + $event.deltaX}`
      );
      $event.preventDefault();
    });
  }

  handleTabClick(menu: Menu) {
    if (menu.link) {
      this.store.dispatch(new AciteSidebarItem(menu.uuid));
    }
  }

  handleTabClose(menu: Menu) {
    if (menu.link) {
      this.store.dispatch(new CloseTab(menu.uuid));
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
