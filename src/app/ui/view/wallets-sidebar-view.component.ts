import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallets-sidebar-view',
  template: `
    <app-section [title]="'Wallets'" [vh100]="true" [showFooter]="true">
      <div header>
        <app-card (interact)="newWalletClick()" [active]="selNew">
          New
        </app-card>
      </div>
      <nav>
        <div *ngFor="let w of wallets">
          <app-card [active]="selected != null && selected.id == w.id" (interact)="walletChanged.emit(w)">
            {{w.name}}
          </app-card>
        </div>
      </nav>
      <div footer>
        <div>
          <app-card (interact)="onLogout()">
            Logout
          </app-card>
        </div>
        <div>
          <app-card (interact)="onSettings()" [active]="selSettings">
            Settings
          </app-card>
        </div>
      </div>
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

      div[footer] > div {
        display: inline-block;
        margin-right: 10px;
      }

    `
  ]
})
export class WalletsSidebarViewComponent {

  @Input() wallets: WalletModel[] = []
  @Input() selected: WalletModel | null = null

  @Input() selNew!: boolean
  @Input() selSettings!: boolean

  @Output() walletChanged = new EventEmitter<WalletModel>()
  @Output('newWallet') openNewWalletPanel = new EventEmitter()

  @Output() logout = new EventEmitter()
  @Output() settings = new EventEmitter()


  newWalletClick() {
    this.openNewWalletPanel.emit()
  }

  onLogout() {
    this.logout.emit()
  }

  onSettings() {
    this.settings.emit()
  }
}
