import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addnews',
    loadChildren: () => import('./addnews/addnews.module').then( m => m.AddnewsPageModule)
  },
  // {
  //   path: 'tabsAdmin',
  //   loadChildren: () => import('./tabsAdmin/tabsAdmin.module').then(m => m.TabsAdminPageModule)
  // }
  {
    path: 'tabsApprove',
    loadChildren: () => import('./tabsApprove/tabsApprove.module').then(m => m.TabsApprovePageModule)
  },
  {
    path: 'detailnews',
    loadChildren: () => import('./detailnews/detailnews.module').then( m => m.DetailnewsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'detailnews-approve',
    loadChildren: () => import('./detailnews-approve/detailnews-approve.module').then( m => m.DetailnewsApprovePageModule)
  },
  {
    path: 'filterapprove',
    loadChildren: () => import('./filterapprove/filterapprove.module').then( m => m.FilterapprovePageModule)
  },
  {
    path: 'editnewsapprove',
    loadChildren: () => import('./editnewsapprove/editnewsapprove.module').then( m => m.EditnewsapprovePageModule)
  },
  {
    path: 'editnews',
    loadChildren: () => import('./editnews/editnews.module').then( m => m.EditnewsPageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
  {
    path: 'status-approve',
    loadChildren: () => import('./status-approve/status-approve.module').then( m => m.StatusApprovePageModule)
  },
  {
    path: 'tabs-user-news',
    loadChildren: () => import('./tabs-user-news/tabs-user-news.module').then( m => m.TabsUserNewsPageModule)
  },
  {
    path: 'tabs-user',
    loadChildren: () => import('./tabs-user/tabs-user.module').then( m => m.TabsUserPageModule)
  },
  {
    path: 'tabs-user-profile',
    loadChildren: () => import('./tabs-user-profile/tabs-user-profile.module').then( m => m.TabsUserProfilePageModule)
  },
  {
    path: 'tabs-user-detailnews',
    loadChildren: () => import('./tabs-user-detailnews/tabs-user-detailnews.module').then( m => m.TabsUserDetailnewsPageModule)
  },
  {
    path: 'approve-news',
    loadChildren: () => import('./approve-news/approve-news.module').then( m => m.ApproveNewsPageModule)
  },
  {
    path: 'approve-news-detail',
    loadChildren: () => import('./approve-news-detail/approve-news-detail.module').then( m => m.ApproveNewsDetailPageModule)
  },
  {
    path: 'approve-news-detail-edit',
    loadChildren: () => import('./approve-news-detail-edit/approve-news-detail-edit.module').then( m => m.ApproveNewsDetailEditPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
