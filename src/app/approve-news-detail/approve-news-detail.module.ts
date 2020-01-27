import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveNewsDetailPageRoutingModule } from './approve-news-detail-routing.module';

import { ApproveNewsDetailPage } from './approve-news-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveNewsDetailPageRoutingModule
  ],
  declarations: [ApproveNewsDetailPage]
})
export class ApproveNewsDetailPageModule {}
