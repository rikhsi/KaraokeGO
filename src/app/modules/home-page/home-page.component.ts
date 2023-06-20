import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fadeInOut } from 'src/app/animations/effects';
import { Card } from 'src/app/models/adv';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'go-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  animations: [fadeInOut]
})

export class HomePageComponent implements OnInit{
  public hideScroll$ = this.helperService.isVisible;
  public advantages!: Card[];
 
  constructor(private helperService: HelperService,private router: Router, private translateService: TranslateService, private meta: Meta, private title: Title){
    
  }

  ngOnInit(): void {
    const currentUrl = this.router.url.substring(1);
    localStorage.setItem('lang', currentUrl);
    
    this.translateService.use(currentUrl).subscribe(() => {
      this.translateService.get('main').subscribe({
        next: data => {
          this.title.setTitle('KaraokeGo - ' + ' ' + data.title);
          this.meta.updateTag({ name: 'description', content: data.text });
          this.meta.updateTag({ name: 'canonical', content: 'https://karaoke-go.cz/' + currentUrl });
        }
      });
    });
  }
}
