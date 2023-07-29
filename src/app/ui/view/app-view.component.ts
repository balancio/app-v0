import { Component } from '@angular/core';
import { TransactionModel } from 'src/app/data/model/transaction-model';
import { WalletModel } from 'src/app/data/model/wallet-model';
import { WalletService } from 'src/app/srv/wallet.service';

@Component({
  selector: 'app-app-view',
  template: `
    <main>
      <section>
        <app-wallets-sidebar-view
          (walletChanged)="getWalletData($event)"
          [wallets]="wallets"
          [selected]="selectedWallet"
        >

        </app-wallets-sidebar-view>
      </section>
      <section>
        <app-wallet-view [wallet]="selectedWallet"></app-wallet-view>
      </section>
      <section>
        <app-section [title]="'Info'"></app-section>
      </section>
    </main>
  `,
  styles: [
    `
      main {
        display: grid;
        grid-template-columns: max-content max-content 1fr;
        box-sizing: border-box;
        height: 100vh;
      }
      main > section {
        /* border-right: 1px solid black; */
        box-sizing: border-box;
      }
      main > section:nth-child(1) { min-width: 150px; z-index: 1; }
      main > section:nth-child(3) { min-width: 150px; z-index: 1; }
      main > section:nth-child(2) { min-width: 500px; }
    `
  ]
})
export class AppViewComponent {

  // TODO: ! Hardcoded values
  wallets: WalletModel[] = []

  constructor(
    private walletSrv: WalletService
  ) {
    walletSrv.getMyWallets(this.cbSuccessGetMyWallets.bind(this))
  }

  selectedWallet: WalletModel | null = this.wallets[1]

  getWalletData(val: WalletModel) {
    this.walletSrv.getWalletTrans(val.id,
      (trans) => this.cbSuccessGetTrans(trans, val),
      () => this.selectedWallet = null
    )
  }

  // Callbacks

  cbSuccessGetMyWallets(wallets: WalletModel[]) {
    console.log(wallets)
    this.wallets = wallets
  }

  cbSuccessGetTrans(trans: TransactionModel[], selected: WalletModel) {
    console.log(trans)
    if (this.selectedWallet)
      this.selectedWallet.transactions = undefined
    selected.transactions = trans
    this.selectedWallet = selected
  }
}
