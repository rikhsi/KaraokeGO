import { Component, OnInit, ViewChild } from '@angular/core';
import { Boon } from 'src/app/models/boon';
import { boonImages } from 'src/assets/config/images';
import SwiperCore, { EffectFade, SwiperOptions} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'go-boon',
  templateUrl: './boon.component.html',
  styleUrls: ['./boon.component.less']
})
export class BoonComponent implements OnInit {
  cards: Boon[] = [
    {
      title: 'boon.cards.first.title',
      text: 'boon.cards.first.text',
      images: []
    },
    {
      title: 'boon.cards.second.title',
      text: 'boon.cards.second.text',
      images: []
    },
    {
      title: 'boon.cards.third.title',
      text: 'boon.cards.third.text',
      images: []
    },
    {
      title: 'boon.cards.fourth.title',
      text: 'boon.cards.fourth.text',
      images: []
    },
    {
      title: 'boon.cards.five.title',
      text: 'boon.cards.five.text',
      images: []
    },
    {
      title: 'boon.cards.six.title',
      text: 'boon.cards.six.text',
      images: []
    },
    {
      title: 'boon.cards.seven.title',
      text: 'boon.cards.seven.text',
      images: []
    },
    {
      title: 'boon.cards.eight.title',
      text: 'boon.cards.eight.text',
      images: []
    }
  ];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'fade',
    loop: true,
    touchMoveStopPropagation: true,
    simulateTouch: false,
    fadeEffect: {
      crossFade: true
    }
  }

  constructor(){
    SwiperCore.use([EffectFade]);
  }

  ngOnInit(): void {
    const photos = boonImages;
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].images = [photos[0], photos[1]];
      photos.splice(0, 2);
    }
  }

  
  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.swiper?.swiperRef.slidePrev(300);
  }
  swipeNext(): void {
    this.swiper?.swiperRef.slideNext(300);
  }
}
