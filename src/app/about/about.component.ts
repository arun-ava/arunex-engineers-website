import { Component } from '@angular/core';
import { IconPath } from '../static/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  headerGeneralText = 'Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.'
  skyline_url = IconPath.skyline;
}
