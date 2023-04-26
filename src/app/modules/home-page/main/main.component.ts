import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { HelperService } from 'src/app/services/helper.service';
import { NavButton } from 'src/app/models/nav';
import { fadeInOut } from 'src/app/animations/effects';
import { contacts, links } from 'src/assets/config/contacts';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { youtubeID } from 'src/assets/config/youtube';

@Component({
  selector: 'go-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [Pulse , fadeInOut]
})
export class MainComponent implements OnInit{
  isOfferModal: boolean = false;
  id!: string;
  safeSrc!: SafeResourceUrl;
  fallback: string = '../../../../assets/img/fallback.jpg';
  isModalVisible:boolean = false;
  isAnimateModal: boolean = false;
  isAnimate:boolean = true;
  currentLang: string = '';
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

  constructor(private translateService: TranslateService, private helperService: HelperService,private sanitizer: DomSanitizer){
    this.id = youtubeID;
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + this.id + "?rel=0&autoplay=1&mute=1");
  }

  ngOnInit(): void {
    timer(200).subscribe(() => this.isAnimate = false);
    this.currentLang = this.translateService.getDefaultLang();
    this.linksList = links;
    this.contactsList = contacts;
  }

  changeLang(lang: string):void {
    localStorage.setItem('lang', lang);
    this.translateService.use(lang);
    this.currentLang = lang;
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
