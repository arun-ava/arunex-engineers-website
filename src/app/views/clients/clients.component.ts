
import { Component } from '@angular/core';
import { Clients, Testimonial } from '../../models/interfaces';
import { IconPath } from '../../static/icons';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  slides: Clients[] = [];

  ngOnInit(): void {
    this.slides = [
      {
        imagePath: IconPath.emerson,
        name: 'John Doe',
      },
      {
        imagePath: IconPath.aramco,
        name: 'John Doe',
      },
      {
        imagePath: IconPath.emerson,
        name: 'John Doe',
      },
    ];
  }
}
