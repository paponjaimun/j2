import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveNewsPageRoutingModule } from './approve-news-routing.module';

import { ApproveNewsPage } from './approve-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveNewsPageRoutingModule
  ],
  declarations: [ApproveNewsPage]
})
export class ApproveNewsPageModule {}
