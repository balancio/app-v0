import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <section [ngClass]="{ 'outline': outline }">
      <header>
        <h1 *ngIf="title">{{title}}</h1>
        <ng-content select="[header]"></ng-content>
      </header>
      <main>
        <ng-content></ng-content>
      </main>
      <footer>
        <ng-content select="[footer]"></ng-content>
      </footer>
    </section>
  `,
  styles: [
    `
      section.outline {
        outline: 1px solid black;
      }
      section {
        height: 100%;
        background: #252627;
        /* background: #333435; */
        overflow: hide;
      }
      /* Header */
      header {
        display: flex;
        align-items: center;

        box-sizing: border-box;
        height: 50px;
        padding: 0 16px;

        background: #1f2021;

        border-bottom: 1px solid black;
      }
      header > h1 {
        margin: 0;
      }
      /* Main */
      main {
        height: 85%; /* TODO: This is hard-coded! */
        overflow: auto;
      }
    `
  ]
})
export class SectionComponent {
  @Input() title: string | null = null
  @Input() outline: boolean = true

}
