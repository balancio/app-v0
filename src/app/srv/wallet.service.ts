import { Injectable } from '@angular/core';
import { WalletApiService } from '../api/wallet-api.service';
import { UserApiService } from '../api/user-api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    // private walletApi: WalletApiService,
    private userApi: UserApiService,
    private authSrv: AuthService,
  ) { }

  getMyWallets() {
    const user = this.authSrv.getTokenPayload().username
    this.userApi.getUserWallets(user).subscribe((res) => {
      console.log(res.body)
    })
  }
}
