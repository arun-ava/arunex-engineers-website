import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../static/routes';
import { IconPath } from '../../static/icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {

  constructor(private _router: Router) {}

  title_header = 'Arunex Engineers';
  header_logo_url = IconPath.headerlogo;
  nav_headers = ['Home', 'About Us', 'Contact'];


  navItemClick(navItem: string) {

    switch(navItem) {
      case this.nav_headers[0]:
        this._router.navigateByUrl('/' + ROUTES.home);
        break;
      case this.nav_headers[1]:
        this._router.navigateByUrl('/' + ROUTES.about);
        break;
        case this.nav_headers[2]:
        this._router.navigateByUrl('/' + ROUTES.contact);
        break;
        default:
        this._router.navigateByUrl('/' + ROUTES.home);
        break;
    };
    console.log(navItem);
  }

}
