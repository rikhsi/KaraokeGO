import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { advantagesImages } from '../../../../assets/config/images';
import { Card } from 'src/app/models/adv';

@Component({
  selector: 'go-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit{
  cards:Card[] = [];
  active = new Set<number>();
  NotallActive: boolean = false;

  constructor(private translateService: TranslateService){
    this.translateService.get('advantages.cards').subscribe(data => {
      this.cards = data;
      const images = advantagesImages;
      this.cards.forEach((d,i) => {
        d.bg = images[i]
      })
    })
  }

  onMouseEnter(block: Element,id: number) {
    const blocks = document.querySelectorAll('.adv__card');
    block.classList.add('card__wide');
    this.active.add(id);
    this.NotallActive = true;

    blocks.forEach(block => {
      if (block.id !== String(id)) {
        block.classList.add('card__short');
      }
    });
  }

  onMouseLeave(block: Element,id: number) {
    const blocks = document.querySelectorAll('.adv__card');
    block.classList.remove('card__wide');
    this.active.clear();
    this.NotallActive = false;
    blocks.forEach(block => {
      block.classList.remove('card__short');
    });
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('advantages.cards').subscribe(data => {
        this.cards = data;
        const images = advantagesImages;
        this.cards.forEach((d,i) => {
          d.bg = images[i]
        })
      });
    });
  }

  getLang():void{
    
  }
}
