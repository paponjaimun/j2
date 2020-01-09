import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailnewsApprovePage } from './detailnews-approve.page';

const routes: Routes = [
  {
    path: '',
    component: DetailnewsApprovePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailnewsApprovePageRoutingModule {}
