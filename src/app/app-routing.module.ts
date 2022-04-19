import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(x => x.BannerModule),
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(x => x.ProductModule),
  },
  {
    path: 'count-down',
    loadChildren: () => import('./countdown-timer/countdown-timer.module').then(x => x.CountdownTimerModule),
  },
  {
    path: 'count-down-service',
    loadChildren: () => import('./timer-with-service/timer-with-service.module').then(x => x.TimerWithServiceModule),
  },
  {
    path: 'student-sheet',
    loadChildren: () => import('./student-sheet/studen-sheet.module').then(x => x.StudentSheetModule),
  },
  {
    path: 'dynamic-box',
    loadChildren: () => import('./dynamic-box/dynamic-box.module').then(x => x.DynamicBoxModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'banner'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
