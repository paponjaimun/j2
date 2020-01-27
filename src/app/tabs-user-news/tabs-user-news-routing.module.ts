import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserNewsPage } from './tabs-user-news.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserNewsPageRoutingModule {}
