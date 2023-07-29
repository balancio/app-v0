import { Component } from '@angular/core';

@Component({
  selector: 'app-add-transaction-view',
  template: `
    <app-section>
      <main>

        <div class="gr-1">
          <label>
            <div>Title</div>
            <input type="text">
          </label>
        </div>

        <div class="gr-2">
          <label>
            <div>Date</div>
            <input type="date">
          </label>

          <label>
            <div>Amount</div>
            <input type="number">
          </label>
        </div>

        <button>Create</button>

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



}
