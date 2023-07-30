import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <section [ngClass]="{ 'outline': outline, 'vh100': vh100 }">
      <header>
        <h1 *ngIf="title">{{title}}</h1>
        <ng-content select="[header]"></ng-content>
      </header>
      <main [ngClass]="{ 'wfooter': showFooter }">
        <ng-content></ng-content>
      </main>
      <footer *ngIf="showFooter">
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
        background: #252627;
        /* background: #333435; */
        overflow: hide;

        /* display: flex;
        flex-direction: column;
        flex: 1 auto 1; */
      }
      section.vh100 {
        height: 100vh;
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
        height: calc(100% - 50px);
        overflow: scroll;
      }
      main.wfooter {
        height: calc(100% - 50px - 50px);
      }
      /* Footer */
      footer {
        display: flex;
        align-items: center;

        box-sizing: border-box;
        height: 50px;
        padding: 0 10px;
      }
    `
  ]
})
export class SectionComponent {
  @Input() title: string | null = null
  @Input() outline: boolean = true
  @Input() vh100: boolean = false
  @Input() showFooter: boolean = false


}
