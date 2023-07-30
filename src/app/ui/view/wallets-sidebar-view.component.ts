import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallets-sidebar-view',
  template: `
    <app-section [title]="'Wallets'" [vh100]="true">
      <div header>
        <app-card (interact)="newWalletClick()" [active]="selNewWallet">
          New
        </app-card>
      </div>
      <nav>
        <div *ngFor="let w of wallets">
          <app-card [active]="selected == w" (interact)="walletChanged.emit(w)">
            {{w.name}}
          </app-card>
        </div>
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

      nav > div {
        margin-bottom: 8px;
      }

      div[header] {
        margin-left: 10px;
      }

    `
  ]
})
export class WalletsSidebarViewComponent {

  @Input() wallets: WalletModel[] = []
  @Input() selected: WalletModel | null = null

  @Output() walletChanged = new EventEmitter<WalletModel>()
  @Output('newWallet') openNewWalletPanel = new EventEmitter()

  selNewWallet = false

  newWalletClick() {
    this.selNewWallet = true
    this.openNewWalletPanel.emit()
  }
}
