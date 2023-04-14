import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { Boon } from 'src/app/models/boon';
import { boonImages } from 'src/assets/config/images';
import SwiperCore, { EffectFade, SwiperOptions} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'go-boon',
  templateUrl: './boon.component.html',
  styleUrls: ['./boon.component.less'],
  animations: [Pulse]
})
export class BoonComponent implements OnInit {
  isActiveButtonLeft: boolean = false;
  isActiveButtonRight: boolean = false;
  photos: string[] = boonImages;
  cards!: Boon[];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'fade',
    loop: true,
    autoHeight: true,
    touchMoveStopPropagation: true,
    simulateTouch: false,
    fadeEffect: {
      crossFade: true
    }
  }
  fallback:string = '../../../../assets/img/fallback.jpg'

  constructor(private translateService: TranslateService){
    SwiperCore.use([EffectFade]);
    this.translateService.get('boon.cards').subscribe(data => {
      this.cards = data;
      this.cards.forEach((data, index) => {
        const firstImageIndex = index * 2 + 1;
        const secondImageIndex = index * 2 + 2;
        data.images = [`${firstImageIndex}.png`, `${secondImageIndex}.png`];
      });
    });
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('boon.cards').subscribe(data => {
        this.cards = data;
        this.cards.forEach((data, index) => {
          const firstImageIndex = index * 2 + 1;
          const secondImageIndex = index * 2 + 2;
          data.images = [`${firstImageIndex}.png`, `${secondImageIndex}.png`];
        });
      });
    });
  }

  
  @ViewChild(SwiperComponent) swiper?: SwiperComponent;
  swipePrev(): void {
    this.isActiveButtonLeft = false;
    this.swiper?.swiperRef.slidePrev(300);
    timer(200).subscribe(() => this.isActiveButtonLeft = true)
  }
  swipeNext(): void {
    this.isActiveButtonRight = false;
    this.swiper?.swiperRef.slideNext(300);
    timer(200).subscribe(() => this.isActiveButtonRight = true)
  }
}
