import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { timer } from 'rxjs';
import { Pulse, shadowPulse } from 'src/app/animations/buttons';
import { youtubeID } from 'src/assets/config/youtube';

@Component({
  selector: 'go-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less'],
  animations: [shadowPulse,Pulse]
})
export class PlayerComponent implements OnInit {
  id!: string;
  isVideo: boolean = false;
  safeSrc!: SafeResourceUrl;
  animateState: boolean = false;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = youtubeID;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + this.id +  '?rel=0&autoplay=1&mute=1');
  }

  play():void {
    this.animateState = true;
    timer(300).subscribe(() => {
      this.animateState = false;
      timer(200).subscribe(() => {
        this.isVideo = true;
      })
    })
  }
}
