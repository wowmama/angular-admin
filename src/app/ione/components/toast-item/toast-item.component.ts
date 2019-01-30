import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Toast } from '../../models/toast.model';
import { IoneState } from '../../stores';
import { RemoveToast } from '../../stores/actions/toast.action';

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss']
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
    this.store.dispatch(new RemoveToast(this.toast.uuid));
  }

  handleToastClick() {
    if (typeof this.toast.handle === 'function') {
      this.toast.handle();
    }
    this.store.dispatch(new RemoveToast(this.toast.uuid));
  }

}
