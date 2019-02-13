import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketActivitesComponent } from './market-activites/market-activites.component';
import { MarketingActivitiesManagementComponent } from './marketing-activities-management.component';


const routes: Routes = [
  {
    path: '',
    component: MarketingActivitiesManagementComponent,
    children: [
      {
        path: 'market-activites',
        component: MarketActivitesComponent
      },
    ],
  },
  {
    path: '',
    redirectTo: 'market-activites',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingActivitiesManagementRoutingModule {
}
