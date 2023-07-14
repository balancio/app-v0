import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <section>
      <header>
        <h1 *ngIf="title">{{title}}</h1>
        <ng-content select="[header]"></ng-content>
      </header>
      <main>
        <ng-content select="[main]"></ng-content>
      </main>
      <footer>
        <ng-content select="[footer]"></ng-content>
      </footer>
    </section>
  `,
  styles: [
    `
      section {
        outline: 1px solid black;
        height: 100%;
      }
      header, footer, main {
        padding: 10px
      }
      header {
        border-bottom: 1px solid black;
      }
      header > h1 {
        margin: 0;
      }
    `
  ]
})
export class SectionComponent {
  @Input() title: string | null = null

}
