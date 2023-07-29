import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import tokenUtil from '../util/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  constructor(
    private router: Router
  ) { }

  /**
   * Handles response by executing certain routines depending on the content of `resp` object
   * Routines:
   * - Delete Auth Token if _status code_ is _Unauthorized_ (Token is not valid or do not exist)
   * @param resp Response object used for deciding which routines should be executed
   * @returns Same unchanged `resp` object
   */
  handleResp<T>(resp: HttpResponse<T>): HttpResponse<T> {
    if (resp.status == HttpStatusCode.Unauthorized) {
      tokenUtil.deleteToken()
      this.router.navigate(['login'])
    }
    return resp
  }
}
