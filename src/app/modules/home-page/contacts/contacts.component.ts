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
    this.get();
    this.contactsList = contacts;
    this.linksList = links;
  }

  openLink(link:string):void{
    timer(200).subscribe(() => window.open(link, '_blank'))
  }

  get() {
    const baseUrl = 'https://static-maps.yandex.ru/1.x/';
    const center = '69.579007,41.473503';
    this.url = `${baseUrl}?ll=${center}&z=10&l=map&size=650,450`;
  }
}
