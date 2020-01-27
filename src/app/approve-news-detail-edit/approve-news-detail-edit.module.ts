import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveNewsDetailEditPageRoutingModule } from './approve-news-detail-edit-routing.module';

import { ApproveNewsDetailEditPage } from './approve-news-detail-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveNewsDetailEditPageRoutingModule
  ],
  declarations: [ApproveNewsDetailEditPage]
})
export class ApproveNewsDetailEditPageModule {}
