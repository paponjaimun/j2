import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsUserProfilePageRoutingModule } from './tabs-user-profile-routing.module';

import { TabsUserProfilePage } from './tabs-user-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsUserProfilePageRoutingModule
  ],
  declarations: [TabsUserProfilePage]
})
export class TabsUserProfilePageModule {}
