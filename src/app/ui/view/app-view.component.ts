import { Component } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

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
  wallets: WalletModel[] = [
    { id: 1, name: 'My Wallet', total: 45380 },
    { id: 2, name: 'Family Wallet', total: 32500,
      transactions: [
        { id: 1, name: 'Salary', amount: 20000, date: new Date() },
        { id: 2, name: 'Gift from grandma', amount: 4000, date: new Date() },
        { id: 3, name: 'Phone bill', amount: -1500, date: new Date() },
      ]
    },
  ]

  selectedWallet: WalletModel | null = this.wallets[1]

  getWalletData(val: WalletModel) {
    this.selectedWallet = val
  }
}
