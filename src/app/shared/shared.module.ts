import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { TranslateModule } from '@ngx-translate/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzDatePickerModule,
    TranslateModule,
    NzInputModule,
    NzRadioModule,
    NzIconModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
