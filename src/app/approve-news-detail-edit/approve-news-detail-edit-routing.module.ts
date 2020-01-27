import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveNewsDetailEditPage } from './approve-news-detail-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveNewsDetailEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveNewsDetailEditPageRoutingModule {}
