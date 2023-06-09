import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Card } from 'src/app/models/adv';
import { Rates } from 'src/app/models/rates';

@Component({
  selector: 'go-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.less']
})
export class RatesComponent implements OnInit{
  isOfferModal: boolean = false;
  target!: Rates | undefined;
  cards: Rates[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.get('rates.cards').subscribe(data => {
      this.cards = data;
    })
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('rates.cards').subscribe(data => {
        this.cards = data;
      });
    });
  }

  showOfferModal(name:Rates | undefined): void {
    this.target = name;
    this.isOfferModal = !this.isOfferModal;
  }
}
