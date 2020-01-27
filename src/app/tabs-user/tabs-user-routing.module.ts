import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsUserPage } from './tabs-user.page';

const routes: Routes = [
  {
    path: '',
    component: TabsUserPage,
    children: [
      {
        path: 'tabs-user-news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs-user-news/tabs-user-news.module').then(m => m.TabsUserNewsPageModule)
          }
        ]
      },
      {
        path: 'tabs-user-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabs-user-profile/tabs-user-profile.module').then(m => m.TabsUserProfilePageModule)
          }
        ]
      },
      {
        path: 'tabs-user-news/filter',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../filter/filter.module').then( m => m.FilterPageModule)
          }
        ]
      },
      {
        path: 'tabs-user-news/tabs-user-detailnews',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../tabs-user-detailnews/tabs-user-detailnews.module').then( m => m.TabsUserDetailnewsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs-user/tabs-user-news',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsUserPageRoutingModule {}
