import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHelperService } from './http-helper.service';
import api from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WalletApiService {

  url() {
    return api.url + '/wallets'
  }

  constructor(
    private http: HttpClient,
    private httpHelp: HttpHelperService
  ) { }

  getWalletTrans(wid: string) {
    return this.http.get(`${this.url()}/${wid}/transactions`, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }
}
