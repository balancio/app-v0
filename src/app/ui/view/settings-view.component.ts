import { Component } from '@angular/core';
import styleUtil from 'src/app/util/style';

@Component({
  selector: 'app-settings-view',
  template: `
    <app-section [vh100]="true">
      <h1 header>App Settings</h1>
      <main>

        <div class="gr-1">
          <div>
            <div>Accent Color</div>
            <button class="color" *ngFor="let color of colors"
              (click)="setColor(color.value)"
              [style.background]="color.value"
              [style.outlineColor]="getAccent()">
                {{color.name}}
            </button>
          </div>
        </div>

      </main>
    </app-section>
  `,
  styles: [
  `
    main {
      padding: 20px;
      width: min-content;
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

    button.color {
      color: #1f2021;
      margin: 10px 0 0 10px;
      border: 1px solid transparent;
      font-weight: bold;
    }
    button.color:hover {
      outline: 4px solid;
      border: 1px solid #1f2021;
    }
    button.color:active {
      outline: 2px solid;
      border: 1px solid #1f2021;
    }
  `
  ]
})
export class SettingsViewComponent {

  colors: {name: string, value: string}[] = [
    {name: 'white', value: '#ccc'},
    {name: 'blue', value: '#ccceee'},
    {name: 'yellow', value: '#eeeccc'},
    {name: 'green', value: 'lime'},
  ]

  getAccent() {
    return styleUtil.accentColor.get()
  }

  setColor(color: string) {
    console.log(color)
    styleUtil.accentColor.change(color)
  }

}
