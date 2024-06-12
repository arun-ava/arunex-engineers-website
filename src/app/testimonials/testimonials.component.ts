
import { Component } from '@angular/core';
import { Testimonial } from '../models/interfaces';
import { IconPath } from '../static/icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  slides: Testimonial[] = [];

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
        imagePath: IconPath.carousel1,
        name: 'John Doe',
        message: 'Very good company',
        designation:' CEO Some Company'
      },
      {
        imagePath: IconPath.carousel2,
        name: 'John Doe',
        message: 'One of the best companies i have ever seen. this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.this is a long message made to test the testimonial container.',
        designation:' CEO Some Company'
      },
      {
        imagePath: IconPath.carousel3,
        name: 'John Doe',
        message: 'Very good company',
        designation:' CEO Some Company'
      },
    ];
  }
}
