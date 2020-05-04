import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about/:name',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact-support',
    loadChildren: () => import('./pages/contact-support/contact-support.module').then( m => m.ContactSupportPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'page1',
    loadChildren: () => import('./startpages/page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2/:name',
    loadChildren: () => import('./startpages/page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./startpages/page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'logger',
    loadChildren: () => import('./tab1/logger/logger.module').then( m => m.LoggerPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./tab1/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


// const routes: Routes = [
//     { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}