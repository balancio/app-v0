import { Injectable } from '@angular/core';
import { WalletApiService } from '../api/wallet-api.service';
import { UserApiService } from '../api/user-api.service';
import { AuthService } from './auth.service';
import { HttpStatusCode } from '@angular/common/http';
import { WalletModel, fromBody as walletFromBody } from '../data/model/wallet-model';
import { TransactionModel, fromBody as tranFromBody } from '../data/model/transaction-model';
import { CbEmpty, CbTransactions, CbWallets, CbWallet } from '../data/type/callbacks';

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
  getMyWallets(onSuccess: CbWallets = () => {}, onError: CbEmpty = () => {}) {
    const user = this.authSrv.getTokenPayload().username
    this.userApi.getUserWallets(user).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        const data = (res.body as Array<any>).map(walletFromBody)
        onSuccess(data)
      }
    })
  }

  getWalletTrans(wid: string, onSuccess: CbTransactions, onError: CbEmpty = () => {}) {
    this.walletApi.getWalletTrans(wid).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        const data = (res.body as Array<any>).map(tranFromBody)
        onSuccess(data)
      }
    })
  }

  getWallet(wid: string, onSuccess: CbWallet, onError: CbEmpty = () => {}) {
    this.walletApi.getWallet(wid).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        const data = walletFromBody(res.body)
        onSuccess(data)
      }
    })
  }

  createWalletTran(wid: string, tran: TransactionModel, onSuccess: CbEmpty, onError: CbEmpty = () => {}) {
    const newTran = {
      title: tran.title,
      date: Number(tran.date),
      amount: tran.amount
    }
    console.log(newTran)
    this.walletApi.createWalletTran(wid, newTran).subscribe((res) => {
      if (res.status == HttpStatusCode.Created) {
        onSuccess()
      }
    })
  }

  createWallet(wallet: WalletModel, onSuccess: CbEmpty, onError: CbEmpty = () => {}) {
    const newWallet = {
      name: wallet.name,
      currency: wallet.currency
    }
    console.log(newWallet)
    this.walletApi.createWallet(newWallet).subscribe((res) => {
      if (res.status == HttpStatusCode.Created) {
        onSuccess()
      }
    })
  }

  deleteWallet(wid: string, onSuccess: CbEmpty, onError: CbEmpty = () => {}) {
    this.walletApi.deleteWallet(wid).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        onSuccess()
      }
    })
  }

  deleteWalletTran(wid: string, tid: string, onSuccess: CbEmpty, onError: CbEmpty = () => {}) {
    this.walletApi.deleteWalletTran(wid, tid).subscribe((res) => {
      if (res.status == HttpStatusCode.Ok) {
        onSuccess()
      }
    })
  }
}
