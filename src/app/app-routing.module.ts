import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'user/sing-up', loadChildren: () => import('./pages/users/sing-up/sing-up.module').then(m => m.SingUpModule) }, { path: 'user/sing-in', loadChildren: () => import('./pages/users/sing-in/sing-in.module').then(m => m.SingInModule) }, { path: 'user/profile', loadChildren: () => import('./pages/users/profile/profile.module').then(m => m.ProfileModule) }, { path: 'user/email-verification', loadChildren: () => import('./pages/users/email-verification/email-verification.module').then(m => m.EmailVerificationModule) }, { path: 'user/forgot-password', loadChildren: () => import('./pages/users/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }, { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
