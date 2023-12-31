import { Component, EventEmitter, Output } from '@angular/core';
import { WalletModel } from 'src/app/data/model/wallet-model';

@Component({
  selector: 'app-add-wallet-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>Create new Wallet</h1>
      <main>

        <div class="gr-2">
          <label>
            <div>Name</div>
            <input type="text" [(ngModel)]="name">
          </label>

          <label>
            <div>Currency</div>
            <input type="text" [(ngModel)]="currency">
          </label>
        </div>

        <button (click)="add()">Create</button>

      </main>
    </app-section>
  `,
  styles: [
  `
    main {
      padding: 20px;
      width: min-content;
    }
    label {
      display: inline-block;
      margin-bottom: 8px;
    }
    label > div {
      padding-left: 4px;
    }
    label > input {
      width: 100%;
    }
    main > div {
      display: grid;
      grid-gap: 8px;
    }
    main > div.gr-1 {
      grid-template-columns: 408px;
    }
    main > div.gr-2 {
      grid-template-columns: 200px 200px;
    }

    button {
      display: block;
      margin: auto;
      margin-top: 20px;
    }
  `
  ]
})
export class AddWalletViewComponent {

  @Output('add') addEve = new EventEmitter()

  name: string = ''
  currency: string = ''

  add() {
    // console.log(this.title, this.date, this.amount)

    if (this.name == '')
      return

    const wallet: WalletModel = {
      id: '',
      name: this.name,
      total: 0,
      currency: this.currency
    }

    this.addEve.emit(wallet)
  }

}
