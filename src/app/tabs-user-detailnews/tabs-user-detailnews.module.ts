import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsUserDetailnewsPageRoutingModule } from './tabs-user-detailnews-routing.module';

import { TabsUserDetailnewsPage } from './tabs-user-detailnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsUserDetailnewsPageRoutingModule
  ],
  declarations: [TabsUserDetailnewsPage]
})
export class TabsUserDetailnewsPageModule {}
