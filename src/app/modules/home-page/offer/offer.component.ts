import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'go-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.less']
})
export class OfferComponent {

  constructor(private router: Router) {}

  openOfferPage():void{
    timer(300).subscribe(() => this.router.navigate(['offer']))
  }

}
