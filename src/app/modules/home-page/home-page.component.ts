import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animations/effects';
import { HelperService } from 'src/app/services/helper.service';
import AOS from "aos";

@Component({
  selector: 'go-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  animations: [fadeInOut]
})
export class HomePageComponent implements OnInit,AfterViewChecked {
  public hideScroll$ = this.helperService.isVisible;

  constructor(private helperService: HelperService){}

  ngOnInit(): void {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out-sine',
      once: true
    });
  }

  ngAfterViewChecked() {
    AOS.refresh();
  }

}
