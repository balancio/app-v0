import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './ui/view/login-view.component';
import { AppViewComponent } from './ui/view/app-view.component';
import { RegisterViewComponent } from './ui/view/register-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: '', component: AppViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
