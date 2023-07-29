import { Injectable } from '@angular/core';
import { WalletApiService } from '../api/wallet-api.service';
import { UserApiService } from '../api/user-api.service';
import { AuthService } from './auth.service';
import { HttpStatusCode } from '@angular/common/http';
import { fromBody as walletFromBody } from '../data/model/wallet-model';
import { fromBody as tranFromBody } from '../data/model/transaction-model';
import { CbOnError, CbTransactions, CbWallets } from '../data/type/callbacks';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private walletApi: WalletApiService,
    private userApi: UserApiService,
    private authSrv: AuthService,
  ) { }

  /**
   * Gets list of wallets of logged in user.
   * If successful `onSuccess` callback is called with wallet list passed as argument.
   * The `onError` callback is called otherwise.
   * @param onSuccess Called if wallets are got successfuly
   * @param onError Called otherwise
   */
  getMyWallets(onSuccess: CbWallets = () => {}, onError: CbOnError = () => {}) {
    const user = this.authSrv.getTokenPayload().username
    this.userApi.getUserWallets(user).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        const data = (res.body as Array<any>).map(walletFromBody)
        onSuccess(data)
      }
    })
  }

  getWalletTrans(wid: string, onSuccess: CbTransactions, onError: CbOnError = () => {}) {
    this.walletApi.getWalletTrans(wid).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        const data = (res.body as Array<any>).map(tranFromBody)
        onSuccess(data)
      }
    })
  }
}
