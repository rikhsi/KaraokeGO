import { Component, OnInit } from '@angular/core';
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
  faqs:Faq[] = [
    {
      question: 'faq.cards.first.question',
      answer: 'faq.cards.first.answer'
    },
    {
      question: 'faq.cards.second.question',
      answer: 'faq.cards.second.answer'
    },
    {
      question: 'faq.cards.third.question',
      answer: 'faq.cards.third.answer'
    },
    {
      question: 'faq.cards.fourth.question',
      answer: 'faq.cards.fourth.answer'
    },
    {
      question: 'faq.cards.five.question',
      answer: 'faq.cards.five.answer'
    },
    {
      question: 'faq.cards.six.question',
      answer: 'faq.cards.six.answer'
    },
    {
      question: 'faq.cards.seven.question',
      answer: 'faq.cards.seven.answer'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

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
