import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent {

  emailicon = 'email';
  emailheader = 'EMAIL';
  emailsubject = 'For any queries';
  emailcontent = 'aruyts@gmail.com';

  phoneicon = 'phone';
  phoneheader = 'PHONE';
  phonesubject = 'Available during business hours';
  phonecontent = '(033) 2421-7047';

  addressicon = 'location_on';
  addressheader = 'ADDRESS';
  addresssubject = 'Find us at';
  addresscontent = '24 A/1 Khanpur Road Kolkata - 700047';
  constructor(){
  }
}
