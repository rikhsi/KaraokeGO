import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animations/effects';
import { Faq } from 'src/app/models/faq';

@Component({
  selector: 'go-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less'],
  animations: [fadeInOut]
})
export class FaqComponent implements OnInit {
  isActive: boolean = false;
  activeFaqs = new Set<number>();
  faqs: Faq[] = [
    {
      id: 1,
      question: 'В каком состоянии находится оборудование для караоке, которое вы предлагаете в аренду?',
      answer: 'Мы предлагаем акустические системы от ведущих производителей, таких как Bose, Electro Voice, Yamaha, которые обеспечивают кристально чистый и мощный звук на любой вечеринке.'
    },
    {
      id: 2,
      question: 'Как долго длится аренда оборудования для караоке?',
      answer: 'Мы предлагаем акустические системы от ведущих производителей, таких как Bose, Electro Voice, Yamaha, которые обеспечивают кристально чистый и мощный звук на любой вечеринке.'
    },
    {
      id: 3,
      question: 'Как долго длится аренда оборудования для караоке?',
      answer: 'Мы предлагаем акустические системы от ведущих производителей, таких как Bose, Electro Voice, Yamaha, которые обеспечивают кристально чистый и мощный звук на любой вечеринке.'
    },
    {
      id: 4,
      question: 'Как долго длится аренда оборудования для караоке?',
      answer: 'Мы предлагаем акустические системы от ведущих производителей, таких как Bose, Electro Voice, Yamaha, которые обеспечивают кристально чистый и мощный звук на любой вечеринке.'
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  toggle(id: number):void {
    if (this.activeFaqs.has(id)) {
      this.activeFaqs.delete(id);
    } else {
      this.activeFaqs.add(id);
    }
  }

  checkActiveFaqs(id: number):boolean {
    return this.activeFaqs.has(id)
  }
}
