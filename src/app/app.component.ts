import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingService } from './ione/services/loading.service';
import { ToastService } from './ione/services/toast.service';
import { LoadMenus } from './ione/stores/actions/menu.action';
import { MENUS } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poc';
  constructor(
    private store: Store<any>,
    private loadingService: LoadingService,
    private toastService: ToastService,
  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(new LoadMenus(MENUS));
  }
  loading() {
    const id1 = this.loadingService.open('Loading');
    setTimeout(() => {
      this.loadingService.dismiss(id1);
    }, 3000);
  }
  handleToast() {
    this.toastService.open({
      title: `Default toast`,
      subTitle: `subtitle`,
      body: `Default toast body`,
      handle: () => {
        alert('Default toast');
      }
    });
  }

  handleToastSuccess() {
    this.toastService.success({
      title: `Success toast`,
      subTitle: `subtitle`,
      body: `Success toast body`,
      handle: () => {
        alert('Success toast');
      }
    });
  }
  handleToastDanger() {
    this.toastService.danger({
      title: `Danger toast`,
      subTitle: `subtitle`,
      body: `Danger toast body`,
      handle: () => {
        alert('Danger toast');
      }
    });
  }
  handleToastWarning() {
    this.toastService.warning({
      title: `Warning toast`,
      subTitle: `subtitle`,
      body: `Warning toast body`,
      handle: () => {
        alert('Warning toast');
      }
    });
  }
  handleToastInfo() {
    this.toastService.info({
      title: `Info toast`,
      subTitle: `subtitle`,
      body: `Info toast body`,
      handle: () => {
        alert('Info toast');
      }
    });
  }
  handleToastQuick() {
    this.toastService.open('Default toast quick use');
  }

  handleToastSuccessQuick() {
    this.toastService.success('Success toast quick use');
  }
  handleToastDangerQuick() {
    this.toastService.danger('Danger toast quick use');
  }
  handleToastWarningQuick() {
    this.toastService.warning('Warning toast quick use');
  }
  handleToastInfoQuick() {
    this.toastService.info('Info toast quick use');
  }
}
