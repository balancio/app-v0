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
          (walletChanged)="onWalletChoosed($event)"
          (newWallet)="openNewWalletPanel()"
          (logout)="logout()"
          (settings)="openSettings()"
          [wallets]="wallets"
          [selected]="selectedWallet"
          [selNew]="infoPanel == 'AddWallet'"
          [selSettings]="infoPanel == 'Settings'"
        ></app-wallets-sidebar-view>
      </section>
      <section>
        <app-wallet-view
          (newTran)="openNewTranPanel()"
          (select)="openTranInfo($event)"
          (info)="openWalletInfo()"
          [wallet]="selectedWallet"
          [selTran]="selectedTran"
          [selNew]="infoPanel == 'AddTran'"
          [selInfo]="infoPanel == 'WalletInfo'"
        ></app-wallet-view>
      </section>

      <section>

        <app-section *ngIf="infoPanel == null"
          [vh100]="true" [outline]="false">
        </app-section>

        <app-settings-view *ngIf="infoPanel == 'Settings'">
        </app-settings-view>

        <app-add-transaction-view *ngIf="infoPanel == 'AddTran'"
          (add)="addNewTransaction($event)">
        </app-add-transaction-view>

        <app-add-wallet-view *ngIf="infoPanel == 'AddWallet'"
          (add)="addNewWallet($event)">
        </app-add-wallet-view>

        <app-transaction-info-view *ngIf="infoPanel == 'TranInfo' && selectedTran && selectedWallet"
          [transaction]="selectedTran"
          [currency]="selectedWallet.currency"
          (delete)="deleteTransaction($event)">
        </app-transaction-info-view>

        <app-wallet-info-view *ngIf="infoPanel == 'WalletInfo' && selectedWallet"
          [wallet]="selectedWallet"
          (delete)="deleteWallet($event)">
        </app-wallet-info-view>
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

  infoPanel: null | 'Settings' | 'AddTran' | 'AddWallet' | 'TranInfo' | 'WalletInfo' = 'Settings'

  constructor(
    private walletSrv: WalletService,
    private authSrv: AuthService,
    private router: Router
  ) {
    if (authSrv.loggedIn() == false) {
      router.navigate(['login'])
    }
    this.getMyWallets()
  }

  selectedWallet: WalletModel | null = null
  selectedTran: TransactionModel | null = null

  // ==== Helpers ====

  onWalletChoosed(wallet: WalletModel) {

    this.infoPanel = 'WalletInfo'
    this.selectedTran = null


    this.getWalletData(wallet)
  }

  // ==== API - Read ====

  getWalletData(wallet: WalletModel, tranOnly: boolean = true) {
    if (tranOnly == false) {
      this.walletSrv.getWallet(wallet.id,
        (wal) => {
          this.walletSrv.getWalletTrans(wal.id,
            (trans) => this.cbSuccessGetTrans(trans, wal),
            () => this.selectedWallet = null
          )
        },
        () => this.selectedWallet = null
      )
    }
    else {
      this.walletSrv.getWalletTrans(wallet.id,
        (trans) => this.cbSuccessGetTrans(trans, wallet),
        () => this.selectedWallet = null
      )
    }


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

  deleteTransaction(tran: TransactionModel) {
    if (this.selectedWallet)
      this.walletSrv.deleteWalletTran(this.selectedWallet.id, tran.id, this.cbSuccessDeleteTran.bind(this))
  }

  deleteWallet(wallet: WalletModel) {
    this.walletSrv.deleteWallet(wallet.id, this.cbSuccessDeleteWallet.bind(this))
  }

  // ==== UI Change ====

  openNewTranPanel() {
    this.infoPanel = this.infoPanel != 'AddTran'? 'AddTran' : null
    this.selectedTran = null
  }

  openNewWalletPanel() {
    this.infoPanel = this.infoPanel != 'AddWallet'? 'AddWallet' : null
    this.selectedTran = null
  }

  openSettings() {
    this.infoPanel = this.infoPanel != 'Settings'? 'Settings' : null
    this.selectedTran = null
  }

  openTranInfo(tran: TransactionModel) {
    this.infoPanel = 'TranInfo'
    this.selectedTran = tran
  }

  openWalletInfo() {
    this.infoPanel = this.infoPanel != 'WalletInfo'? 'WalletInfo' : null
    this.selectedTran = null
  }

  // ==== Actions ====

  logout() {
    this.authSrv.logout()
    this.router.navigate(['login'])
  }

  // ==== Callbacks ====

  cbSuccessGetMyWallets(wallets: WalletModel[]) {
    // console.log(wallets)
    this.wallets = wallets
  }

  cbSuccessGetTrans(trans: TransactionModel[], selected: WalletModel) {
    if (this.selectedWallet)
      this.selectedWallet.transactions = undefined

    selected.transactions = trans
    this.selectedWallet = selected
    // console.log(this.selectedWallet)
  }

  cbSuccessNewTran() {
    // this.infoPanel = null
    // this.infoPanel = 'AddTran'
    console.log(this.selectedWallet)
    if (this.selectedWallet)
      this.getWalletData(this.selectedWallet, false)
  }

  cbSuccessNewWallet() {
    this.infoPanel = null
    this.getMyWallets()
  }

  cbSuccessDeleteTran() {
    if (this.selectedWallet) {
      this.getWalletData(this.selectedWallet, false)
      this.infoPanel = null
    }
  }

  cbSuccessDeleteWallet() {
    this.infoPanel = null
    this.getMyWallets()
  }

}
