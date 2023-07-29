import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/srv/auth.service';

@Component({
  selector: 'app-login-view',
  template: `
    <label>Username <input type="text" [(ngModel)]="username"></label> <br>
    <label>Password <input type="password" [(ngModel)]="password"></label> <br>
    <button (click)="login()">Login</button>
  `,
  styles: [
  ]
})
export class LoginViewComponent {

  @Input() username: string = ''
  @Input() password: string = ''

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  login() {
    this.authSrv.login(this.username, this.password, this.onLogin.bind(this))
  }

  onLogin() {
    this.router.navigate([''])
  }

}
