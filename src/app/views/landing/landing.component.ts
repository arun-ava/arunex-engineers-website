import { Component } from '@angular/core';
import { IconPath } from '../../static/icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  skyline_url = IconPath.skyline;
}
