import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterapprovePageRoutingModule } from './filterapprove-routing.module';

import { FilterapprovePage } from './filterapprove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterapprovePageRoutingModule
  ],
  declarations: [FilterapprovePage]
})
export class FilterapprovePageModule {}
