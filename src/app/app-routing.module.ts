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
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
      },
      {
        path: 'folder/:id',
        loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
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
