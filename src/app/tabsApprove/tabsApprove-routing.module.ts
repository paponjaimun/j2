import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsApprovePage } from './tabsApprove.page';

const routes: Routes = [
  {
    path: '',
    component: TabsApprovePage,
    children: [
      // {
      //   path: 'homepage',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../homepage/homepage.module').then(m => m.HomepagePageModule)
      //     }
      //   ]
      // },
      {
        path: 'tab1Approve',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1Approve/tab1Approve.module').then(m => m.Tab1ApprovePageModule)
          }
        ]
      },
      {
        path: 'tab2Approve',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2Approve/tab2Approve.module').then(m => m.Tab2ApprovePageModule)
          }
        ]
      },
      {
        path: 'tab3Approve',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3Approve/tab3Approve.module').then(m => m.Tab3ApprovePageModule)
          }
        ]
      },
      {
        path: 'status-approve',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../status-approve/status-approve.module').then(m => m.StatusApprovePageModule)
          }
        ]
      },
      {
        path: 'approve-news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../approve-news/approve-news.module').then( m => m.ApproveNewsPageModule)
          }
        ]
      },
      {
        path: 'status-approve/detailnews-approve',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../detailnews-approve/detailnews-approve.module').then( m => m.DetailnewsApprovePageModule)
          }
        ]
      },
      {
        path: 'approve-news/approve-news-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../approve-news-detail/approve-news-detail.module').then( m => m.ApproveNewsDetailPageModule)
          }
        ]
      },
      {
        path: 'approve-news/approve-news-detail/approve-news-detail-edit',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../approve-news-detail-edit/approve-news-detail-edit.module').then( m =>  m.ApproveNewsDetailEditPageModule)
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
        path: 'tab1Approve/detailnews-approve',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../detailnews-approve/detailnews-approve.module').then( m => m.DetailnewsApprovePageModule)
          }
        ]
      },
      {
        path: 'tab1Approve/detailnews-approve/editnewsapprove',
        children: [
          {
            path: '',
            loadChildren: () => import('../editnewsapprove/editnewsapprove.module').then( m => m.EditnewsapprovePageModule)
          }
        ]
      },
      {
        path: 'status-approve/detailnews-approve/editnewsapprove',
        children: [
          {
            path: '',
            loadChildren: () => import('../editnewsapprove/editnewsapprove.module').then( m => m.EditnewsapprovePageModule)
          }
        ]
      },
      {
        path: 'tab3Approve/profile',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },{
        path: 'tab1Approve/filter',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../filter/filter.module').then( m => m.FilterPageModule)
          }
        ]
      },{
        path: 'tab1Approve/filterapprove',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../filterapprove/filterapprove.module').then( m => m.FilterapprovePageModule)
          }
        ]
      }, {
        path: '',
        redirectTo: '/tabsApprove/tab1Approve',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabsApprove/tab1Approve',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsApprovePageRoutingModule {}
