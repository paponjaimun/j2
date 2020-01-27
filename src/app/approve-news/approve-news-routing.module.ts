import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveNewsPage } from './approve-news.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveNewsPageRoutingModule {}
