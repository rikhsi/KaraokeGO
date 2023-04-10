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
import { PlayerComponent } from './player/player.component';

//ngZorroModules
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';

//translateModule
import { TranslateModule } from '@ngx-translate/core';


//formsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//swiper
import { SwiperModule } from 'swiper/angular';

//youtube
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SharedModule } from 'src/app/shared/shared.module';

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
    BoonComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    TranslateModule,
    NzInputModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzIconModule,
    SwiperModule,
    NzImageModule,
    NzDropDownModule,
    NzModalModule,
    NgxYoutubePlayerModule,
    SharedModule
  ]
})
export class HomePageModule { }
