import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Toast } from '../../models/toast.model';
import { IoneState } from '../../stores';
import { RemoveToast } from '../../stores/actions/toast.action';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
})
export class ToastItemComponent implements OnInit, AfterViewInit {


  @Input() toast: Toast;
  @Output() renderComplete: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private store: Store<IoneState>,
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.renderComplete.emit(true);
  }
  handleRemoveToast() {
    this.store.dispatch(new RemoveToast({ uuid: this.toast.uuid }));
  }

  handleToastClick() {
    if (typeof this.toast.handle === 'function') {
      this.toast.handle();
    }
    this.store.dispatch(new RemoveToast({ uuid: this.toast.uuid }));
  }

  get toastClass() {
    let toastClass = '';
    switch (this.toast.type) {
      case 'info':
        toastClass = 'toast-info';
        break;
      case 'warning':
        toastClass = 'toast-warning';
        break;
      case 'success':
        toastClass = 'toast-success';
        break;
      case 'danger':
        toastClass = 'toast-danger';
        break;
    }
    return of([toastClass]);
  }

}
