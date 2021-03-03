import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { WindowModelComponent } from './window-model/window-model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular9Project';
  constructor(private dialog: DialogService) {}

  ngOnInit() {
  }

  open() {
    this.dialog.open(WindowModelComponent);
  }
}
