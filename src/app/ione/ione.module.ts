import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { IONE_COMPONENTS } from './components';
import { IONE_SERVICES } from './services';
import { reducers } from './stores';

@NgModule({
  declarations: [
    ...IONE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('ione', reducers),
  ],
  exports: [
    ...IONE_COMPONENTS,
  ],
  providers: [
    ...IONE_SERVICES
  ],
})
export class IoneModule { }
