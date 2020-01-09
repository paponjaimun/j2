import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditnewsPage } from './editnews.page';

const routes: Routes = [
  {
    path: '',
    component: EditnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditnewsPageRoutingModule {}
