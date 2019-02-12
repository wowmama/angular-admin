import { Component, OnInit } from '@angular/core';
import { IonePage } from 'src/app/ione/decorators/ione-page.decorator';
import { ToastService } from 'src/app/ione/services/toast.service';
@IonePage({
  name: 'Toast',
  breadcrumbs: ['UI Services', 'Toast'],
})
@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.html',
  styleUrls: ['./toast-page.component.scss']
})
export class ToastPageComponent implements OnInit {

  constructor(
    private toastService: ToastService,
  ) { }

  ngOnInit() {
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
