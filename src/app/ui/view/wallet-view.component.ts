import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionModel } from 'src/app/data/model/transaction-model';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallet-view',
  template: `
    <app-section [title]="wallet?.name ?? null" [outline]="false" [vh100]="true">
      <span *ngIf="wallet" class="info" header>
        <span [ngClass]="{ 'c-bad': wallet.total < 0, 'c-good': wallet.total > 0, 'c-warn': wallet.total == 0 }">
          {{wallet.total}}
        </span> {{wallet.currency}}
      </span>
      <span *ngIf="wallet" class="info" header>
        <app-card (interact)="newTranClick()" [active]="selNew">New Transaction</app-card>
      </span>
      <nav *ngIf="wallet && wallet.transactions">
        <div *ngFor="let t of wallet.transactions">
          <app-card (interact)="onTranClick(t)" [active]="t == selTran">
            <span class="amount" [ngClass]="{ 'c-bad': t.amount < 0, 'c-good': t.amount > 0 }">{{t.amount}}</span> |
            <span class="title">{{t.title}}</span>
            <div class="date">{{t.date.toDateString()}}</div>
          </app-card>
        </div>
      </nav>
    </app-section>
  `,
  styles: [
    `
      span.info {
        /* font-size: 1.2em; */
        margin-left: 10px;
        /* font-weight: bold; */
        border-left: 1px solid black;
        padding-left: 10px;
      }
      nav {
        display: flex;
        flex-direction: column;
        padding: 8px;
      }
      nav > div {
        margin-bottom: 8px;
      }
      nav .date {
        font-size: 0.8em;
      }
    `
  ]
})
export class WalletViewComponent {

  @Output('newTran') openNewTranPanel = new EventEmitter()

  @Input() wallet: WalletModel | null = null

  @Input() selTran: null | TransactionModel = null

  @Input() selNew = false // "Active" state

  onTranClick(tran: TransactionModel) {
    // this.selTran = tran // TODO: Uncomment when TranInfo is implemented
  }

  newTranClick() {
    this.selTran = null
    this.openNewTranPanel.emit()
  }
}
