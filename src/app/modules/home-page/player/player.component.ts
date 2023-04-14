import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { youtubeID } from 'src/assets/config/youtube';

@Component({
  selector: 'go-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  id!: string;
  safeSrc!: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = youtubeID;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + this.id +  '?rel=0');
  }
}
