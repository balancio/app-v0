import { Component } from '@angular/core';

@Component({
  selector: 'app-app-view',
  template: `
    <main>
      <section>
        <app-section [title]="'Wallets'">
          <app-section [title]="'Subtitle'" main></app-section>
        </app-section>
      </section>
      <section>
        <app-section [title]="'Wallet Name | 352.862,00 din. | opt1 opt2 opt3'"></app-section>
      </section>
      <section>
        <app-section [title]="'Info'"></app-section>
      </section>
    </main>
  `,
  styles: [
    `
      main {
        display: grid;
        grid-template-columns: max-content max-content 1fr;
        box-sizing: border-box;
        height: 100vh;
      }
      main > section {
        /* border-right: 1px solid black; */
        box-sizing: border-box;
      }
      main > section:nth-child(1) { min-width: 150px; }
      main > section:nth-child(2) { min-width: 500px; }
    `
  ]
})
export class AppViewComponent {
}
