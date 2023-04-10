import { Component, OnInit } from '@angular/core';
import { aboutImage } from 'src/assets/config/images';

@Component({
  selector: 'go-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  fallback: string = '../../../../assets/img/fallback.jpg';
  photo: string = '';

  constructor(){}

  ngOnInit(): void {
    this.photo = aboutImage;
  }
}
