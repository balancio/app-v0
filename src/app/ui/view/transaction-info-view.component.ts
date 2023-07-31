import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionModel } from 'src/app/data/model/transaction-model';

@Component({
  selector: 'app-transaction-info-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>"{{transaction.title}}"</h1>
      <main>

        <div>{{transaction.amount}} {{currency}}</div>
        <div>{{transaction.date.toDateString()}}</div>

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
export class TransactionInfoViewComponent {

  @Output() delete = new EventEmitter()

  @Input() transaction!: TransactionModel
  @Input() currency: string = ''

  onDelete() {
    if (this.transaction)
      this.delete.emit(this.transaction)
  }

}
