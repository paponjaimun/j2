import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../status/status.module').then(m => m.StatusPageModule)
          }
        ]
      },
      {
        path: 'tab1Approve/filter',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../filter/filter.module').then( m => m.FilterPageModule)
          }
        ]
      },
      {
        path: 'tab2/addnews',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../addnews/addnews.module').then( m => m.AddnewsPageModule)
          }
        ]
      },
      {
        path: 'tab1/detailnews',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../detailnews/detailnews.module').then( m => m.DetailnewsPageModule)
          }
        ]
      },   
      {
        path: 'status/detailnews',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../detailnews/detailnews.module').then( m => m.DetailnewsPageModule)
          }
        ]
      },   
      {
        path: 'tab1/detailnews/editnews',
        children: [
          {
            path: '',
            loadChildren: () => import('../editnews/editnews.module').then( m => m.EditnewsPageModule)
          }
        ]
      },
      {
        path: 'status/detailnews/editnews',
        children: [
          {
            path: '',
            loadChildren: () => import('../editnews/editnews.module').then( m => m.EditnewsPageModule)
          }
        ]
      },
      {
        path: 'tab1/filter',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../filter/filter.module').then( m => m.FilterPageModule)
          }
        ]
      },
      {
        path: 'tab3/profile',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
