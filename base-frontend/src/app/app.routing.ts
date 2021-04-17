import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './../../plugins/plugin-core/plugin-core-frontend/src/app/profile/profile.component';
import { SignupComponent } from './../../plugins/plugin-login/plugin-login-frontend/src/app/signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './../../plugins/plugin-login/plugin-login-frontend/src/app/login/login.component';
import { RecuperarSenhaComponent } from 'plugins/plugin-login/plugin-login-frontend/src/app/recuperar-senha/recuperar-senha.component';
import { ProfileEmpresaComponent } from 'plugins/plugin-core/plugin-core-frontend/src/app/profile-empresa/profile-empresa.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'recuperar-senha',          component: RecuperarSenhaComponent },
    { path: 'profile-empresa',          component: ProfileEmpresaComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
