import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>App Settings</h1>
      <main>



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

    /* button {
      display: block;
      margin: auto;
      margin-top: 20px;
    } */
  `
  ]
})
export class SettingsViewComponent {

}
