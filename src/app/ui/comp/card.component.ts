import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <a class="card" (click)="onInteract()" [ngClass]="{ active, inline }">
      <ng-content></ng-content>
    </a>
  `,
  styles: [
  `
    a {
      border-radius: 4px;
      border: 1px solid transparent;
      display: block;

      /* margin-bottom: 8px; */
      padding: 4px 8px;

      color: unset;
      background: #1f2021;
      border: 1px solid #181819;
      text-decoration: none;
    }
    a.card:hover {
      background: #333435;
    }
    a.card.active {
      border: 1px solid;
      /* border: 1px solid #d4d4d4; */
    }

    a.inline {
      display: inline-block;
    }
  `
  ]
})
export class CardComponent {

  @Output() interact = new EventEmitter()
  @Input() active = false
  @Input() inline = false

  onInteract() {
    console.log('Card Click!')
    this.interact.emit()
  }
}
