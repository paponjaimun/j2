import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditnewsapprovePageRoutingModule } from './editnewsapprove-routing.module';

import { EditnewsapprovePage } from './editnewsapprove.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditnewsapprovePageRoutingModule
  ],
  declarations: [EditnewsapprovePage]
})
export class EditnewsapprovePageModule {}
