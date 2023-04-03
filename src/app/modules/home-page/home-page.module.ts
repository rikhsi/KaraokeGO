import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//components
import { HomePageComponent } from './home-page.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { MainComponent } from './main/main.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { RatesComponent } from './rates/rates.component';
import { FaqComponent } from './faq/faq.component';
import { BoonComponent } from './boon/boon.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

//translateModule
import { TranslateModule } from '@ngx-translate/core';


//formsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    HomePageComponent,
    AdvantagesComponent,
    MainComponent,
    FeedbackComponent,
    ContactsComponent,
    AboutComponent,
    RatesComponent,
    FaqComponent,
    BoonComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    NzInputModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule
  ]
})
export class HomePageModule { }
