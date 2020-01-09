import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewsPage } from './addnews.page';
// import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: AddnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    // IonicStorageModule.forRoot()
  ],
  exports: [RouterModule],
})
export class AddnewsPageRoutingModule {}
