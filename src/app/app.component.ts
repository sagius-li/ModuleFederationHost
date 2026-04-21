import { Component, OnInit, Type } from '@angular/core';

import { loadRemoteModule } from "@angular-architects/native-federation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Module Federation Host';

  loadError = false;

  remoteApp: Type<unknown> | null = null;

  async ngOnInit() {
    try {
      const remoteModule = await loadRemoteModule({
        remoteName: 'remote',
        exposedModule: './RemoteApp'
      })
      this.remoteApp = remoteModule.AppComponent;
    } catch (err) {
      console.log('Failed to load remote component', err);
      this.loadError = true;
    }
  }
}
