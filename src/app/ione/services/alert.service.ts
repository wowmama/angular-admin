import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Alert } from '../models/alert.model';
import { IoneState } from '../stores';
import { PushAlert } from '../stores/actions/alert.action';


export interface AlertOption {
  body: string;
  title?: string;
  buttons?: Array<{
    text: string,
    cssClass?: string,
    handler?: () => void
  }>;
}

@Injectable()
export class AlertService {

  constructor(
    private store: Store<IoneState>
  ) { }

  open(option: AlertOption): Observable<string> {
    const subject = new Subject<string>();
    let buttons: Array<{ text: string, cssClass?: string, handler?: () => void }> =
      [
        {
          text: '取消',
          cssClass: 'btn-primary',
          handler: () => {
            subject.complete();
          }
        },
        {
          text: '确认',
          cssClass: 'btn-primary',
          handler: () => {
            subject.next('确认');
            subject.complete();
          }
        }
      ];
    if (option.buttons && option.buttons.length > 0) {
      buttons = option.buttons.map(button => {
        return {
          ...button,
          cssClass: button.cssClass ? button.cssClass : 'btn-primary',
          handler: () => {
            if (typeof button.handler === 'function') {
              button.handler();
            }
            subject.next(button.text);
            subject.complete();
          }
        };
      });
    }
    const alert: Alert = {
      title: option.title,
      body: option.body,
      buttons: buttons,
      dismiss: (type: string) => {
        subject.next(type);
        subject.complete();
      },
      cancle: () => subject.complete()
    };
    this.store.dispatch(new PushAlert({ alert }));
    return subject;
  }
}
