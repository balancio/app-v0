import { Component, Input } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallet-view',
  template: `
    <app-section [title]="wallet?.name ?? null" [outline]="false">
      <span *ngIf="wallet" class="info" header>
        <span class="total">{{wallet.total}}</span> din.
      </span>
      <span *ngIf="wallet" class="info" header>
        TODO
      </span>
      <nav *ngIf="wallet && wallet.transactions">
        <a *ngFor="let t of wallet.transactions" href="#">
          <span class="amount" [ngClass]="{ 'neg': t.amount < 0, 'pos': t.amount > 0 }">{{t.amount}}</span> |
          <span class="title">{{t.title}}</span>
          <div class="date">{{t.date.toDateString()}}</div>
        </a>
      </nav>
    </app-section>
  `,
  styles: [
    `
      span.info {
        font-size: 1.2em;
        margin-left: 10px;
        font-weight: bold;
        border-left: 1px solid black;
        padding-left: 10px;
      }
      span.info > span {
        color: green;
      }
      nav {
        display: flex;
        flex-direction: column;
        padding: 8px;
      }
      nav > a {
        border-radius: 4px;
        border: 1px solid transparent;

        margin-bottom: 8px;
        padding: 4px 8px;

        color: unset;
        background: #fff;
        text-decoration: none;

        /* border: 1px solid transparent; */
      }
      nav > a:hover {
        background: #eee;
        outline: 1px solid black;
      }
      nav > a > .amount.pos {
        color: green;
      }
      nav > a > .amount.neg {
        color: red;
      }
      nav > a > .date {
        font-size: 0.8em;
      }
    `
  ]
})
export class WalletViewComponent {
  @Input() wallet: WalletModel | null = null
}
