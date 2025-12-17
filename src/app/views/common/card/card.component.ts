import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/static/routes';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class CardComponent {
  @Input()
  header!: string;

  @Input()
  body!: string;

  @Input()
  buttonLabel!: string;

  constructor(private _router: Router) {}

  handleButtonClick($event: any) {
    this._router.navigateByUrl('/' + ROUTES.about);
  }

}
