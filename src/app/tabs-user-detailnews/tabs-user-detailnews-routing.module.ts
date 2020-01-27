import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserDetailnewsPage } from './tabs-user-detailnews.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserDetailnewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserDetailnewsPageRoutingModule {}
