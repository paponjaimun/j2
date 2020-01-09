import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsApprovePageRoutingModule } from './tabsApprove-routing.module';

import { TabsApprovePage } from './tabsApprove.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsApprovePageRoutingModule
  ],
  declarations: [TabsApprovePage]
})
export class TabsApprovePageModule {}
