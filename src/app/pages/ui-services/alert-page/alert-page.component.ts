import { Component, OnInit } from '@angular/core';
import { IonePage } from 'src/app/ione/decorators/ione-page.decorator';
import { AlertService } from 'src/app/ione/services/alert.service';

@IonePage({
  name: 'Alert',
  breadcrumbs: ['UI Services', 'Alert'],
})
@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.html',
  styleUrls: ['./alert-page.component.scss']
})
export class AlertPageComponent implements OnInit {
  title = 'Hello world';
  body = 'Hello world';

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  alert() {
    this.alertService.open(
      {
        title: this.title,
        body: this.body
      }
    ).subscribe(type => {
      console.log('type', type);
    });
  }

  customAlert() {
    this.alertService.open(
      {
        title: this.title,
        body: this.body,
        buttons: [
          {
            text: '按钮1',
          },
          {
            text: '按钮2',
          },
          {
            text: '按钮3',
          }
        ]

      }
    ).subscribe(type => {
      console.log('type', type);
    });

  }

}
