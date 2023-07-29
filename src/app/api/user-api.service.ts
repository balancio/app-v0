import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHelperService } from './http-helper.service';
import api from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url() {
    return api.url + '/users'
  }

  constructor(
    private http: HttpClient,
    private httpHelp: HttpHelperService
  ) { }

  /**
   * Get new Auth Token
   * @param user Username
   * @param pass Password
   */
  login(user: string, pass: string) {
    return this.http.post(`${this.url()}/login`,
    {
      username: user,
      password: pass
    },
    { observe: 'response' }
    )
  }

  getUserWallets(user: string) {
    return this.http.get(`${this.url()}/${user}/wallets`, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }
}
