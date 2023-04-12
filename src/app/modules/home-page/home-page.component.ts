import {Component} from '@angular/core';
import { fadeInOut } from 'src/app/animations/effects';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'go-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  animations: [fadeInOut]
})

export class HomePageComponent{
  public hideScroll$ = this.helperService.isVisible;

  constructor(private helperService: HelperService){}
}
