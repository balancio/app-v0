import { Injectable } from '@angular/core';
import { UrlHelperService } from './url-helper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private http: HttpClient,
    private url: UrlHelperService
  ) {
    url.setRoute('/users')
  }

  /**
   * Get new Auth Token
   * @param user Username
   * @param pass Password
   */
  login(user: string, pass: string) {
    return this.http.post(`${this.url.endpoint()}/login`,
    {
      username: user,
      password: pass
    },
    { observe: 'response' }
    )
  }
}
