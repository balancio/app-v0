import { Component, EventEmitter, Output } from '@angular/core';
import { TransactionModel } from 'src/app/data/model/transaction-model';

@Component({
  selector: 'app-add-transaction-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>Create new Transaction</h1>
      <main>

        <div class="gr-1">
          <label>
            <div>Title</div>
            <input type="text" [(ngModel)]="title">
          </label>
        </div>

        <div class="gr-2">
          <label>
            <div>Date</div>
            <input type="date" [(ngModel)]="date">
          </label>

          <label>
            <div>Amount</div>
            <input type="number" [(ngModel)]="amount">
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
      padding: 4px 20px;


      border-radius: 4px;

      color: unset;
      background: #333435;
      border: 1px solid #181819;
      text-decoration: none;
    }
    button:hover {
      background: #1f2021;
    }
    button:active {
      border: 1px solid #888888;
    }
  `
  ]
})
export class AddTransactionViewComponent {

  @Output('add') addEve = new EventEmitter()

  title: string = ''
  date: string | null = null
  amount: number = 0

  add() {
    // console.log(this.title, this.date, this.amount)

    if (this.title == '')
      return

    if (this.date == null)
      return

    if (this.amount == 0)
      return

    const tran: TransactionModel = {
      id: '',
      title: this.title,
      date: new Date(this.date),
      amount: this.amount,
    }

    this.addEve.emit(tran)
  }

}
