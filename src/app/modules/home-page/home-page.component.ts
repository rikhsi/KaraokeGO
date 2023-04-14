import {Component, OnInit} from '@angular/core';
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

  constructor(private helperService: HelperService){
    
  }

  ngOnInit(): void {
  }
}
