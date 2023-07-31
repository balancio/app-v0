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

  getWallet(wid: string) {
    return this.http.get(`${this.url()}/${wid}`, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }

  createWalletTran(wid: string, tran: any) {
    return this.http.post(`${this.url()}/${wid}/transactions`, tran, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }

  createWallet(wallet: any) {
    return this.http.post(this.url(), wallet, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }

  deleteWallet(wid: any) {
    return this.http.delete(`${this.url()}/${wid}`, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }

  deleteWalletTran(wid: string, tid: string) {
    return this.http.delete(`${this.url()}/${wid}/transactions/${tid}`, {
      observe: 'response',
      headers: this.httpHelp.fillHeaders()
    })
  }
}
