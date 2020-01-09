import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailnewsApprovePageRoutingModule } from './detailnews-approve-routing.module';

import { DetailnewsApprovePage } from './detailnews-approve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailnewsApprovePageRoutingModule
  ],
  declarations: [DetailnewsApprovePage]
})
export class DetailnewsApprovePageModule {}
