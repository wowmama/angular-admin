import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'ui-services',
        loadChildren: './ui-services/ui-services.module#UiServicesModule',
      },
      {
        path: 'marketing-activities-management',
        loadChildren: './marketing-activities-management/marketing-activities-management.module#MarketingActivitiesManagementModule',
      },

    ],
  },
  {
    path: '',
    redirectTo: 'ui-services',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
