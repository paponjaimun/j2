import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditnewsPageRoutingModule } from './editnews-routing.module';

import { EditnewsPage } from './editnews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditnewsPageRoutingModule
  ],
  declarations: [EditnewsPage]
})
export class EditnewsPageModule {}
