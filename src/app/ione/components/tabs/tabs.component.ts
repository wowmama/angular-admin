import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tab } from '../../models/tab.model';
import { IoneState, seleceTabs } from '../../stores';
import { CloseTab } from '../../stores/actions/tab.action';

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
    private store: Store<IoneState>,
    private router: Router,
    private actions$: Actions,
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

  handleTabClick(tab: Tab) {
    this.router.navigate([tab.url], { queryParams: {} });
  }

  handleTabClose(tab: Tab) {
    this.store.dispatch(new CloseTab({ tab }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
