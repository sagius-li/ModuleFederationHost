import { AfterViewInit, Component, OnInit, Type, ViewChild } from '@angular/core';

import { loadRemoteModule } from "@angular-architects/native-federation";

import { TitleBarComponent } from "mf-shared-core";
import { UtilsService } from "mf-shared-core";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('titleBar')
  titleBar?: TitleBarComponent;

  loadError = false;

  state = { message: 'Welcome to the Host Home' };

  widget: Type<unknown> | null = null;

  constructor(private utils: UtilsService) { }

  async ngOnInit() {
    this.utils.log('HomeComponent initialized');
    try {
      const remoteModule = await loadRemoteModule({
        remoteName: 'remote',
        exposedModule: './RemoteWidget'
      })
      this.widget = remoteModule.WidgetComponent;
    } catch (err) {
      console.log('Failed to load remote component', err);
      this.loadError = true;
    }
  }

  async ngAfterViewInit() {
    if (this.titleBar) {
      const remoteUtilsService = await loadRemoteModule({
        remoteName: 'remote',
        exposedModule: './RemoteUtilsService'
      });
      const remoteUtils = new remoteUtilsService.RemoteUtilsService();
      remoteUtils.brandTitle(this.titleBar);
    }
  }
}
