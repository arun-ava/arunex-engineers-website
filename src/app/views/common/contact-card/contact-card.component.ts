import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input()
  icon!: string;

  @Input()
  header!: string;

  @Input()
  subject!: string;

  @Input()
  content!: string;


  constructor(){
  }
}
