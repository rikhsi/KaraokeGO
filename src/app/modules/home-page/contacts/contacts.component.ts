import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { contacts, links } from 'src/assets/config/contacts';

@Component({
  selector: 'go-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit{
  fallback: string = '../../../../assets/img/fallback.jpg';
  url!: string;
  contactsList!: {phone: string , mail: string, book: string};
  linksList!: {whatsApp: string, instagram: string};

  constructor() {}

  ngOnInit(): void {
    this.contactsList = contacts;
    this.linksList = links;
  }

  openLink(link:string):void{
    timer(200).subscribe(() => window.open(link, '_blank'))
  }
}
