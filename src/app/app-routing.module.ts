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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
