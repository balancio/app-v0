import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/srv/auth.service';

@Component({
  selector: 'app-register-view',
  template: `
    <main>
      <h1>Balancio</h1>
      <hr>
      <h2>Register</h2>
      <label>Username <br> <input type="text" [(ngModel)]="username"></label> <br>
      <label>Password <br> <input type="password" [(ngModel)]="pass1"></label> <br>
      <label>Confirm Password <br> <input type="password" [(ngModel)]="pass2"></label> <br>
      <button (click)="register()">Register</button>
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
    `
    ]
})
export class RegisterViewComponent {

  @Input() username: string = ''
  @Input() pass1: string = ''
  @Input() pass2: string = ''

  constructor(
    private authSrv: AuthService,
    private router: Router
  ) { }

  register() {
    this.authSrv.register(this.username, this.pass1, this.pass2, this.onRegister.bind(this))
  }

  onRegister() {
    this.router.navigate(['login'])
  }

}
