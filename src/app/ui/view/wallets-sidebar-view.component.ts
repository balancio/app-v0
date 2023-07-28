import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallets-sidebar-view',
  template: `
    <app-section [title]="'Wallets'">
      <nav>
        <a *ngFor="let w of wallets" href="#"
          [ngClass]="{ 'active': selected == w }"
          (click)="walletChanged.emit(w)"
        >
          {{w.name}}
        </a>
      </nav>
    </app-section>
  `,
  styles: [
    `
      nav {
        display: flex;
        flex-direction: column;
        padding: 8px;
      }
      nav > a {
        /* height: 30px; */

        border-radius: 4px;
        /* border: 2px solid transparent; */

        margin-bottom: 8px;
        padding: 4px 8px;

        color: unset;
        background: #fff;
        text-decoration: none;
      }
      nav > a:hover {
        background: #eee;
        outline: 1px solid black;
      }
      nav > a.active {
        background: #f5f5f5;
        outline: 2px solid black;
      }

    `
  ]
})
export class WalletsSidebarViewComponent {

  @Input() wallets: WalletModel[] = []
  @Input() selected: WalletModel | null = null

  @Output() walletChanged = new EventEmitter<WalletModel>()
}
