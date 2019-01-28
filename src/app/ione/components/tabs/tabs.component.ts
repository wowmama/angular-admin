import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @ViewChild('tabsInner') tabsInner: ElementRef;

  constructor(
    private renderer: Renderer2
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
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
