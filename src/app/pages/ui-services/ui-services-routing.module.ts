import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertPageComponent } from './alert-page/alert-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ToastPageComponent } from './toast-page/toast-page.component';
import { UiServicesComponent } from './ui-services.component';


const routes: Routes = [
  {
    path: '',
    component: UiServicesComponent,
    children: [
      {
        path: 'loading',
        component: LoadingPageComponent
      },
      {
        path: 'toast',
        component: ToastPageComponent
      },
      {
        path: 'alert',
        component: AlertPageComponent
      },
    ],
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiServicesRoutingModule {
}
