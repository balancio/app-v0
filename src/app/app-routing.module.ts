import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './ui/view/login-view.component';
import { AppViewComponent } from './ui/view/app-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', component: AppViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
