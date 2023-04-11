import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Rates } from 'src/app/models/rates';

@Component({
  selector: 'go-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.less']
})
export class RatesComponent implements OnInit{
  isOfferModal: boolean = false;
  target!: string | undefined;
  cards: Rates[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.get('rates.cards').subscribe(data => {
      this.cards = data;
    })
  }

  showOfferModal(name:string | undefined): void {
    this.target = name;
    this.isOfferModal = !this.isOfferModal;
  }
}
