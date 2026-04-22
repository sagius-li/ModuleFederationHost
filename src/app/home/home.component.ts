import { Component, OnInit, Type } from '@angular/core';

import { loadRemoteModule } from "@angular-architects/native-federation";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
