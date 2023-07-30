import { Component } from '@angular/core';
import styleUtil from './util/style';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [ ]
})
export class AppComponent {
  title = 'balancio';

  constructor() {
    styleUtil.accentColor.refresh()
  }
}
