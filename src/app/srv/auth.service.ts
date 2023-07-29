import { Injectable } from '@angular/core';
import { UserApiService } from '../api/user-api.service';
import tokenUtil from '../util/token';
import { ApiHelperService } from './api-helper.service';
import { HttpStatusCode } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userApi: UserApiService,
    private router: Router
  ) { }

  login(user: string, pass: string, onSuccess: Function = () => {}, onError: Function = () => {}) {
    this.userApi.login(user, pass).subscribe((res) => {
      const token = res.headers.get('Authorization')?.replace('Bearer ', '')
      // Success
      if(res.status == HttpStatusCode.Ok && token != undefined) {
        tokenUtil.storeToken(token)
        onSuccess()
      }
      // Error
      else {
        onError()
      }
    })
  }

  loggedIn() {
    return tokenUtil.loadToken() ? true : false
  }

  getToken(): string | null {
    return tokenUtil.loadToken()
  }

  getTokenPayload(navIfNull = false) {
    const token = tokenUtil.loadToken()

    if (token == null) {
      if (navIfNull)
        this.router.navigate(['login'])
      return null
    }

    return JSON.parse(atob(token.split('.')[1]))
  }
}
