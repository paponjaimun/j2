import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserProfilePage } from './tabs-user-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserProfilePageRoutingModule {}
