import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    NzGridModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class OfferModule { }
