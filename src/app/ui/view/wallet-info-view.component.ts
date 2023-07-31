import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-wallet-info-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>"{{wallet.name}}" Wallet Options</h1>
      <main>

        <button class='del' (click)="onDelete()">Delete</button>

      </main>
    </app-section>
  `,
  styles: [
  `
    main {
      padding: 20px;
      width: max-content;
    }
    button.del {
      display: block;
      margin: auto;
      margin-top: 20px;
      background: #b92c44;
      font-weight: bold;
    }
  `
  ]
})
export class WalletInfoViewComponent {

  @Output() delete = new EventEmitter()

  @Input() wallet!: WalletModel
  @Input() currency: string = ''

  onDelete() {
    if (this.wallet)
      this.delete.emit(this.wallet)
  }

}
