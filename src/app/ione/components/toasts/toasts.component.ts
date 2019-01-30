import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IoneState } from '../../stores';
import { selectToasts } from '../../stores/selectors/toast.selector';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
})
export class ToastsComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @ViewChild('toastContainer') toastContainer: ElementRef;

  toasts$ = this.store.pipe(
    select(selectToasts),
    takeUntil(this.destroyed$)
  );

  constructor(
    private store: Store<IoneState>,
    private actions$: Actions,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  scrollBottom() {
    this.renderer.setProperty(
      this.toastContainer.nativeElement,
      'scrollTop',
      this.toastContainer.nativeElement.scrollHeight
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
