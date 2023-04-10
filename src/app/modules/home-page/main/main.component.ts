import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { NavButton } from 'src/app/models/nav';
import { mainImages } from 'src/assets/config/images';
import SwiperCore, { EffectFade, Autoplay, SwiperOptions} from 'swiper';

@Component({
  selector: 'go-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [Pulse]
})
export class MainComponent implements OnInit {
  isOfferModal: boolean = false;
  fallback: string = '../../../../assets/img/fallback.jpg';
  isModalVisible = false;
  isAnimate:boolean = true;
  currentLang: string = '';
  buttonsList: NavButton[] = [
    {
      id: 1,
      name: 'ЦЕНЫ'
    },
    {
      id: 2,
      name: 'КТО МЫ'
    },
    {
      id: 3,
      name: 'FAQ'
    },
    {
      id: 4,
      name: 'КОНТАКТЫ'
    }    
  ];
  options: {lang: string}[] = [
    {
      lang: 'ru'
    },
    {
      lang: 'uz'
    },
    {
      lang: 'en'
    }
  ]
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
  photos: string[] = [];

  constructor(private translateService: TranslateService){
    SwiperCore.use([EffectFade,Autoplay]);
  }

  ngOnInit(): void {
    timer(200).subscribe(() => this.isAnimate = false);
    this.currentLang = this.translateService.getDefaultLang();
    this.getGallery();
  }

  changeLang(lang: string):void {
    this.translateService.use(lang);
    this.currentLang = lang;
  }

  getGallery(): void {
    this.photos = mainImages;
  }

  showModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }

  activeLogo():void{
    timer(200).subscribe(() => this.isModalVisible = false);
  }

  openLink():void{
    timer(200).subscribe(() => window.open('', '_blank'))
  }

  showOfferModal(): void {
    this.isOfferModal = !this.isOfferModal;
  }
}
