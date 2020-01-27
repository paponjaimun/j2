import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveNewsDetailPage } from './approve-news-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveNewsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveNewsDetailPageRoutingModule {}
