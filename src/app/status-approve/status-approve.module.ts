import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusApprovePageRoutingModule } from './status-approve-routing.module';

import { StatusApprovePage } from './status-approve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusApprovePageRoutingModule
  ],
  declarations: [StatusApprovePage]
})
export class StatusApprovePageModule {}
