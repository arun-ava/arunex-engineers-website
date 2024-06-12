
import { Component } from '@angular/core';
import { IconPath } from '../static/icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  slides: any[] = [];

  servicesCardHeader = 'Services';
  projectsCardHeader = 'Projects';
  clientsCardHeader = 'Clients';
  servicesCardBody = 'We have provided services to people all over the world';
  projectsCardBody = 'Worked over 1000+ projects over a span of 20+ years';
  clientsCardBody = 'We work with Titans of the industry';

  informationBtnLabel = 'More Info';
  

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        src: IconPath.carousel1,
        title: 'Some text 1'
      },
      {
        src: IconPath.carousel2,
        title: 'Some text 2'
      },
      {
        src: IconPath.carousel3,
        title: 'Some text 3'
      },
    ];
  }
}
