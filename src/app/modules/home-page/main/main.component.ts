import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { HelperService } from 'src/app/services/helper.service';
import { NavButton } from 'src/app/models/nav';
import { mainImages } from 'src/assets/config/images';
import SwiperCore, { EffectFade, Autoplay, SwiperOptions} from 'swiper';
import { fadeInOut } from 'src/app/animations/effects';

@Component({
  selector: 'go-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [Pulse , fadeInOut]
})
export class MainComponent implements OnInit {
  isOfferModal: boolean = false;
  fallback: string = '../../../../assets/img/fallback.jpg';
  isModalVisible:boolean = false;
  isAnimateModal: boolean = false;
  isAnimate:boolean = true;
  currentLang: string = '';
  buttonsList: NavButton[] = [
    {
      id: 1,
      name: 'ЦЕНЫ',
      link: 'rates'
    },
    {
      id: 2,
      name: 'КТО МЫ',
      link: 'about'
    },
    {
      id: 3,
      name: 'FAQ',
      link: 'faq'
    },
    {
      id: 4,
      name: 'КОНТАКТЫ',
      link: 'contacts'
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

  constructor(private translateService: TranslateService, private helperService: HelperService){
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

  openModal(): void {
    this.isAnimateModal = true;
    this.helperService.hideScroll();
    timer(300).subscribe(() => {
      this.isModalVisible = true;
    })
  }

  hideModal(): void {
    timer(100).subscribe(() => {
      this.isModalVisible = false;
    })
    this.helperService.showScroll();
    this.isAnimateModal = false;
  }

  openLink():void{
    timer(200).subscribe(() => window.open('', '_blank'))
  }

  showOfferModal(): void {
    timer(200).subscribe(() =>this.isOfferModal = !this.isOfferModal)
  }

  navigate(link: string): void {
    this.hideModal();
    const contactsSection = document.getElementById(link);
    timer(300).subscribe(() => {
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth' });
      }
    })
  }
}
