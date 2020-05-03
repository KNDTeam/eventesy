import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ShellComponent } from '@app/pages/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'transmission/Inbox',
        pathMatch: 'full'
      },
      {
        path: 'transmission/:id',
        loadChildren: () => import('@pages/transmission/transmission.module').then(m => m.TransmissionPageModule)
      }
    ]
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  //   pathMatch: 'full',
  //   canActivate: [LoginGuard],
  // },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
