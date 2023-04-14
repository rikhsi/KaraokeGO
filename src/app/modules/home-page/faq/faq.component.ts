import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { minus, plus } from 'src/app/animations/buttons';
import { fadeInOut } from 'src/app/animations/effects';
import { Faq } from 'src/app/models/faq';

@Component({
  selector: 'go-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
  animations: [fadeInOut,plus,minus]
})
export class FaqComponent implements OnInit {
  isActive: boolean = false;
  isDisabled: boolean = false;
  activeFaqs = new Set<number>();
  faqs:Faq[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.get('faq.cards').subscribe(data => {
      this.faqs = data;
    })
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('faq.cards').subscribe(data => {
        this.faqs = data;
      });
    });
  }

  toggle(id: number):void {
    this.isDisabled = !this.isDisabled;
    if (this.activeFaqs.has(id)) {
      this.activeFaqs.delete(id);
    } else {
      this.activeFaqs.add(id);
    }
    timer(400).subscribe(() => {
      this.isDisabled = !this.isDisabled;
    })
  }

  checkActiveFaqs(id: number):boolean {
      return this.activeFaqs.has(id);
  }
}
