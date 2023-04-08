import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Pulse } from 'src/app/animations/buttons';
import { NavButton } from 'src/app/models/nav';

@Component({
  selector: 'go-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  animations: [Pulse]
})
export class MainComponent implements OnInit {
  fallback: string = '../../../../assets/img/fallback.jpg';
  isAnimate:boolean = true;
  currentLang: string = 'RU';
  buttonsList: NavButton[] = [];
  options = [
    {
      lang: 'RU'
    },
    {
      lang: 'UZ'
    },
    {
      lang: 'EN'
    }
  ]

  constructor(){}

  ngOnInit(): void {
    timer(200).subscribe(() => this.isAnimate = false);
    this.buttonsList = [
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
    ]
  }

  changeLang(lang: string):void {
    this.currentLang = lang;
  }
}
