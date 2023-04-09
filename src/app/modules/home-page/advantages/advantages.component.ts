import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/adv';
import { advantagesImages } from 'src/assets/config/images';

@Component({
  selector: 'go-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit{
  cards:Card[] = [
    {
      id: 1,
      bg: '',
      title: 'advantages.cards.first.title',
      text: 'advantages.cards.first.text',
    },
    {
      id: 2,
      bg: '',
      title: 'advantages.cards.second.title',
      text: 'advantages.cards.second.text',
    },
    {
      id: 3,
      bg: '',
      title: 'advantages.cards.third.title',
      text: 'advantages.cards.third.text',
    }
  ]

  constructor(){}

  ngOnInit(): void {
    const photos: string[] = advantagesImages;
    this.cards.forEach((data,index) => {
      data.bg = photos[index]
    })
  }
}
