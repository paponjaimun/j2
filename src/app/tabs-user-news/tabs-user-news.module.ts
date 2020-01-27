import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsUserNewsPageRoutingModule } from './tabs-user-news-routing.module';

import { TabsUserNewsPage } from './tabs-user-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsUserNewsPageRoutingModule
  ],
  declarations: [TabsUserNewsPage]
})
export class TabsUserNewsPageModule {}
