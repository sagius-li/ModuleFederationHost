import { Component } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: false,
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  public title = 'This is the Title Bar Component';

  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
