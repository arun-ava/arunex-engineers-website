
import { Component } from '@angular/core';
import { Testimonial } from '../../models/interfaces';
import { IconPath } from '../../static/icons';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    standalone: false
})
export class TestimonialsComponent {

  slides: Testimonial[] = [];

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
