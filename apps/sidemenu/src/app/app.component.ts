import { Component } from '@angular/core';

@Component({
  selector: 'sio4-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menu = {
    main: {
      id: 'main',
      items: {
        1: { id: 1, icon: 'home', url: 'home', badge: 3 },
        2: { id: 2, icon: 'information-circle', url: 'about' },
        3: { id: 3, icon: 'settings', url: 'settings' }
      },
    },
  }
  constructor() {}
}
