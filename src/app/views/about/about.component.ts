import { Component } from '@angular/core';
import { IconPath } from '../../static/icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  generalText = 'Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000. We have clients all over the world.Arunex Engineers is an automation and instrumentation company founded in 2000.'
  clientText = 'Arunex has a rich history of working with stalwarts of the industry around the world. We take pride in giving our clients the best solutions which they can send for implementaiton without hesitation. Some of them are listed below.'
  skyline_url = IconPath.skyline;
}
