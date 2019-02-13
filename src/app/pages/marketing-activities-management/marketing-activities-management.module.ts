import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarketActivitesComponent } from './market-activites/market-activites.component';
import { MarketingActivitiesManagementRoutingModule } from './marketing-activities-management-routing.module';
import { MarketingActivitiesManagementComponent } from './marketing-activities-management.component';


const MARKET_ACTIVITIES_MANAGEMENT_COMPONENTS = [
  MarketingActivitiesManagementComponent,
  MarketActivitesComponent,
];

@NgModule({
  imports: [
    MarketingActivitiesManagementRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MARKET_ACTIVITIES_MANAGEMENT_COMPONENTS,
  ],
})
export class MarketingActivitiesManagementModule {
}
