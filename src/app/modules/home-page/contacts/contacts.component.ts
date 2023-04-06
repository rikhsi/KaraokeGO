import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit{
  url!: string;

  constructor() {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    const baseUrl = 'https://static-maps.yandex.ru/1.x/';
    const center = '69.579007,41.473503';
    this.url = `${baseUrl}?ll=${center}&z=10&l=map&size=650,450`;
  }
}
