import { Injectable } from '@angular/core';
import tokenUtil from '../util/token';
import { HttpResponse } from '@angular/common/http';

/**
 * Helper class, for use in Api classes only
 */
@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor() { }

  /**
   * Add necessary headers to existing `headers` object
   * Headers added by this function:
   * - Authorization: Bearer _token_
   * @returns Same `headers` object with addition of new attributes
   */
  fillHeaders(headers: any = {}) {
    const token = tokenUtil.loadToken()
    if(token)
      headers.Authorization = `Bearer ${token}`

    return headers
  }
}
