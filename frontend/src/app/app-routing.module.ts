import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { HORIZONTAL_ROUTES } from "./shared/routes/horizontal-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { RegisterComponent } from 'app/register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: HorizontalLayoutComponent, data: { title: 'horizontal Views' }, children: HORIZONTAL_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}