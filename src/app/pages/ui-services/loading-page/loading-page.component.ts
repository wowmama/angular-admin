import { Component, OnInit } from '@angular/core';
import { ionePage } from 'src/app/ione/decorators/ione-page.decorator';
import { LoadingService } from 'src/app/ione/services/loading.service';
@ionePage({
  name: 'Loading',
  breadcrumbs: ['UI Services', 'Loading'],
})
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {
  static get test() {
    return 'test';
  }
  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit() {
  }

  loading() {
    const id1 = this.loadingService.open('Loading');
    setTimeout(() => {
      this.loadingService.dismiss(id1);
    }, 3000);
  }
}
