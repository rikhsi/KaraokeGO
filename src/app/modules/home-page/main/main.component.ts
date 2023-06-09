import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { HelperService } from 'src/app/services/helper.service';
import { NavButton } from 'src/app/models/nav';
import { fadeInOut } from 'src/app/animations/effects';
import { contacts, links } from 'src/assets/config/contacts';
import SwiperCore, { EffectFade, Autoplay, SwiperOptions} from 'swiper';
import { mainImages } from 'src/assets/config/images';
import { Router } from '@angular/router';

@Component({
  selector: 'go-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [Pulse , fadeInOut]
})
export class MainComponent implements OnInit{
  isOfferModal: boolean = false;
  fallback: string = '../../../../assets/img/fallback.jpg';
  isModalVisible:boolean = false;
  isAnimateModal: boolean = false;
  isAnimate:boolean = true;
  currentLang: string = '';
  photos: string[] = [];
  buttonsList: NavButton[] = [
    {
      id: 1,
      name: 'rates.title',
      link: 'rates'
    },
    {
      id: 2,
      name: 'about.title',
      link: 'about'
    },
    {
      id: 3,
      name: 'FAQ',
      link: 'faq'
    },
    {
      id: 4,
      name: 'contacts.title',
      link: 'contacts'
    }    
  ];
  options: {lang: string}[] = [
    {
      lang: 'en'
    },
    {
      lang: 'ru'
    },
    {
      lang: 'cz'
    },
    {
      lang: 'de'
    }
  ]
  linksList!: {whatsApp: string, instagram: string};
  contactsList!: {phone: string , mail: string, book: string};
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

  constructor(private translateService: TranslateService, private helperService: HelperService, private router: Router){
    SwiperCore.use([EffectFade,Autoplay]);
  }

  ngOnInit(): void {
    timer(200).subscribe(() => this.isAnimate = false);
    this.photos = mainImages;
    this.currentLang = this.getPage();
    this.linksList = links;
    this.contactsList = contacts;
  }
  
  getPage(): string {
    const page: string = this.router.url;
    if (page === '/en') {
      return 'en';
    } 
    if (page === '/ru') {
      return 'ru';
    } 
    if (page === '/cz') {
      return 'cz';
    } 
    if (page === '/de') {
      return 'de';
    } 
    return 'en'
  }

  changeLang(lang: string):void {
    this.router.navigate([lang]);
  }

  openModal(): void {
    this.isAnimateModal = true;
    this.helperService.hideScroll();
    timer(300).subscribe(() => {
      this.isModalVisible = true;
    })
  }

  hideModal(): void {
    timer(300).subscribe(() => {
      this.isModalVisible = false;
    })
    this.helperService.showScroll();
    this.isAnimateModal = false;
  }

  openLink(link: string):void{
    timer(200).subscribe(() => window.open(link, '_blank'))
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
