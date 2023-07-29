import { Injectable } from '@angular/core';
import { UserApiService } from '../api/user-api.service';
import tokenUtil from '../util/token';
import { ApiHelperService } from './api-helper.service';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userApi: UserApiService,
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
}
