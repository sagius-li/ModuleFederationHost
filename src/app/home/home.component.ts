import { Component, OnInit, Type } from '@angular/core';

import { loadRemoteModule } from "@angular-architects/native-federation";

import { UtilsService } from '../core/services/utils.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loadError = false;

  remoteApp: Type<unknown> | null = null;

  constructor(private utils: UtilsService) { }

  async ngOnInit() {
    this.utils.log('HomeComponent initialized');
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
