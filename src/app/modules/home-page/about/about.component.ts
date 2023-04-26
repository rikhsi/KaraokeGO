import { Component, OnInit } from '@angular/core';
import { aboutImage } from 'src/assets/config/images';
import SwiperCore, { EffectFade, Autoplay, SwiperOptions} from 'swiper';

@Component({
  selector: 'go-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  fallback: string = '../../../../assets/img/fallback.jpg';
  photos: string[] = [];

  constructor(){
    SwiperCore.use([EffectFade,Autoplay]);
  }

  config: SwiperOptions = {
    slidesPerView: 'auto',
    effect: 'fade',
    grabCursor: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    loop: true
  }

  ngOnInit(): void {
    this.getGallery();
  }

    getGallery(): void {
      this.photos = aboutImage;
  }

}
