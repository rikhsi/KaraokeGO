import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/adv';

@Component({
  selector: 'go-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit{
  active = new Set<number>();
  cards:Card[] = [
    {
      id: 1,
      bg: '../../../../assets/img/1447.png',
      title: 'Мобильность',
      text: ' Мобильность Привезем и установим караоке систему в любую точку Европы.',
    },
    {
      id: 2,
      bg: '../../../../assets/img/1447.png',
      title: 'Большой выбор',
      text: ' Более 100 000 зарубежных и отечественных песен на любой вкус.',
    },
    {
      id: 3,
      bg: '../../../../assets/img/1447.png',
      title: 'Качество',
      text: ' Звукорежиссер установит технику и проконтролирует ее работу.',
    }
  ]

  constructor(){}

  ngOnInit(): void {}

  animateOn(id: number): void {
    this.active.add(id)
  }

  animateOff(id:number): void {
    this.active.delete(id);
  }
}
