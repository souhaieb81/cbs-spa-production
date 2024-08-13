import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { SignInComponent } from './authentication/components/sign-in/sign-in.component';

const routes: Routes = [
  //{path: 'login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'login', component: SignInComponent, pathMatch: 'full'},
  {path: 'register', component: SignUpComponent, pathMatch: 'full'},
  {path: '', component: SignInComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
