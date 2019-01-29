import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UUID from 'uuid';
import { IoneState } from '../stores';
import { AddLoading, RemoveLoading } from '../stores/actions/loading.action';




@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private store: Store<IoneState>
  ) { }

  open(text: string = ''): string {
    const uuid: string = UUID.v4();
    this.store.dispatch(new AddLoading(text, uuid));
    return uuid;
  }

  dismiss(uuid: string) {
    this.store.dispatch(new RemoveLoading(uuid));
  }
}
