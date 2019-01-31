import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/ione/services/loading.service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

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
