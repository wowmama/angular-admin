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
  count = 0;
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
    const id1 = this.loadingService.open('TEST1');
    setTimeout(() => {
      this.loadingService.dismiss(id1);
    }, 3000);
  }
  handleToast() {
    this.count++;
    this.toastService.open({
      title: `${new Date().toLocaleDateString()}   ${this.count}`,
      subTile: `${new Date().toLocaleDateString()}   ${this.count}`,
      body: `${new Date().toLocaleDateString()}   ${this.count}`,
      handle: () => {
        alert('hello world');
      }
    });
  }
}
