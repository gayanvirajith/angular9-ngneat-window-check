import { DialogService, DialogRef } from '@ngneat/dialog';
import {
  Component,
  ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  template: `
    <h1>Hello World</h1>
    <button (click)="ref.close()">Close</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowModelComponent {
  constructor(public ref: DialogRef) { }
}