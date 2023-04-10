import { Component } from '@angular/core';

@Component({
  selector: 'go-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.less']
})
export class RatesComponent{
  isOfferModal: boolean = false;
  cards = [
    {
      name: "rates.cards.first.name",
      price: "rates.cards.first.price",
      time: "rates.cards.first.time",
      person: "rates.cards.first.person",
      volume: "rates.cards.first.volume",
      amount: "rates.cards.first.amount",
      text: "rates.cards.first.text"
    },
    {
      name: "rates.cards.second.name",
      price: "rates.cards.second.price",
      time: "rates.cards.second.time",
      person: "rates.cards.second.person",
      volume: "rates.cards.second.volume",
      amount: "rates.cards.second.amount",
      text: "rates.cards.second.text"
    }
  ];

  showOfferModal(): void {
    this.isOfferModal = !this.isOfferModal;
  }
}
