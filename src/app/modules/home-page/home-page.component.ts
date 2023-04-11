import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animations/effects';

@Component({
  selector: 'go-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  animations: [fadeInOut]
})
export class HomePageComponent implements OnInit {
  overflowHidden: boolean = true;

  constructor(){}

  ngOnInit(): void {
    
  }

}
