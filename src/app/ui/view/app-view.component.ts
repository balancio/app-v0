import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionModel } from 'src/app/data/model/transaction-model';
import { WalletModel } from 'src/app/data/model/wallet-model';
import { AuthService } from 'src/app/srv/auth.service';
import { WalletService } from 'src/app/srv/wallet.service';

@Component({
  selector: 'app-app-view',
  template: `
    <main>
      <section>
        <app-wallets-sidebar-view
          (walletChanged)="getWalletData($event)"
          (newWallet)="openNewWalletPanel()"
          (logout)="logout()"
          [wallets]="wallets"
          [selected]="selectedWallet"
        >

        </app-wallets-sidebar-view>
      </section>
      <section>
        <app-wallet-view [wallet]="selectedWallet" (newTran)="openNewTranPanel()"></app-wallet-view>
      </section>
      <section>
        <app-section *ngIf="infoPanel == null" [title]="''" [vh100]="true"></app-section>
        <app-add-transaction-view *ngIf="infoPanel == 'AddTran'" (add)="addNewTransaction($event)"></app-add-transaction-view>
        <app-add-wallet-view *ngIf="infoPanel == 'AddWallet'" (add)="addNewWallet($event)"></app-add-wallet-view>
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
        box-sizing: border-box;
      }
      main > section:nth-child(1) { min-width: 150px; z-index: 1; }
      main > section:nth-child(3) { min-width: 150px; z-index: 1; }
      main > section:nth-child(2) { min-width: 500px; }
    `
  ]
})
export class AppViewComponent {

  wallets: WalletModel[] = []

  infoPanel: null | 'AddTran' | 'AddWallet' = null

  constructor(
    private walletSrv: WalletService,
    private authSrv: AuthService,
    private router: Router
  ) {
    this.getMyWallets()
  }

  selectedWallet: WalletModel | null = this.wallets[1]

  // ==== API - Read ====

  getWalletData(val: WalletModel) {
    this.walletSrv.getWalletTrans(val.id,
      (trans) => this.cbSuccessGetTrans(trans, val),
      () => this.selectedWallet = null
    )
  }

  getMyWallets() {
    this.walletSrv.getMyWallets(this.cbSuccessGetMyWallets.bind(this))
  }

  // ==== API - Write ====

  addNewTransaction(tran: TransactionModel) {
    if (this.selectedWallet == null)
      return

    this.walletSrv.createWalletTran(this.selectedWallet.id, tran, this.cbSuccessNewTran.bind(this))
  }

  addNewWallet(wallet: WalletModel) {
    this.walletSrv.createWallet(wallet, this.cbSuccessNewWallet.bind(this))
  }

  // ==== UI Change ====

  openNewTranPanel() {
    this.infoPanel = 'AddTran'
  }

  openNewWalletPanel() {
    this.infoPanel = 'AddWallet'
  }

  // ==== Actions ====

  logout() {
    this.authSrv.logout()
    this.router.navigate(['login'])
  }

  // ==== Callbacks ====

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

  cbSuccessNewTran() {
    this.infoPanel = null
    this.infoPanel = 'AddTran'
    if (this.selectedWallet)
      this.getWalletData(this.selectedWallet)
  }

  cbSuccessNewWallet() {
    this.infoPanel = null
    this.infoPanel = 'AddTran'
    this.getMyWallets()
  }
}
