import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/srv/auth.service';

@Component({
  selector: 'app-login-view',
  template: `
    <main>
      <h1>Balancio</h1>
      <hr>
      <h2>Login</h2>
      <label>Username <br> <input type="text" [(ngModel)]="username"></label> <br>
      <label>Password <br> <input type="password" [(ngModel)]="password"></label> <br>
      <button (click)="login()">Login</button>
      <div class="foot">
        <div>Don't have account?</div>
        <a href="/register"> Register</a>
      </div>
    </main>
  `,
  styles: [
  `
    main {
      margin: auto;
      width: min-content;
      margin-top: calc(10vh)
    }

    button {
      display: block;
      margin: auto;
      margin-top: 20px;
    }

    .foot {
      margin-top: 30px;
      font-size: 0.9em;
      text-align: center;
    }

    .foot a {
      color: unset;
    }

    .foot a:hover {
      color: violet;
    }
  `
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
