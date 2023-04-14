import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { differenceInCalendarDays} from 'date-fns';
import { timer } from 'rxjs';
import { Inputs } from 'src/app/models/inputs';
import { Rates } from 'src/app/models/rates';
import emailjs from 'emailjs-com';
import { contacts } from 'src/assets/config/contacts';
import { fadeInOut } from 'src/app/animations/effects';

@Component({
  selector: 'go-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  animations: [fadeInOut]
})
export class ModalComponent implements OnInit , OnChanges{
  @Input() isVisible!:boolean;
  @Input() target: Rates | undefined;
  amount: string | undefined = '';
  @Output() isClosed = new EventEmitter();
  private today = new Date();
  form!: FormGroup;
  formInputs: Inputs = {
    inputs: [
      {
        title: 'feedback.inputs.first.title',
        placeholder: 'feedback.inputs.first.placeholder',
        controlName: 'name'
      },
      {
        title: 'feedback.inputs.second.title',
        placeholder: 'feedback.inputs.second.placeholder',
        controlName: 'mail'
      }
    ],
    calendar: {
      title: 'feedback.inputs.third.title',
      placeholder: 'feedback.inputs.third.placeholder',
      controlName: 'calendar'
    },
    area: {
      title: 'feedback.inputs.fourth.title',
      placeholder: 'feedback.inputs.fourth.placeholder',
      controlName: 'message'
    }
  }
  rates!: Rates[];
  isForm: boolean = true;
  phone: string = '';

  constructor(private fb: FormBuilder,private translateService: TranslateService) { 
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required, Validators.email]],
      calendar: [null, Validators.required],
      rate: [this.target?.name],
      message: [null, Validators.required]
    });
    this.translateService.get('rates.cards').subscribe(data => {
      this.rates = data;
      this.target = data[0];
    })
    
  }

  handleCancel(): void {
    timer(200).subscribe(() => this.isClosed.emit());
  }

  ngOnInit(): void {
    this.phone = contacts.phone;
    this.translateService.onLangChange.subscribe(() => {
      this.translateService.get('rates.cards').subscribe(data => {
        this.rates = data;
        this.target = data[0];
      })
    });
    this.form.get('rate')?.valueChanges.subscribe((value) => {
      this.rates.find(data => {
        if(value === data.name){
          this.amount = data.amount;
        }
      })
    });
  
  }

  counter(amount: string | undefined): void {
    this.amount = amount;
  }

  ngOnChanges() {
    this.form.controls['rate'].setValue(this.target?.name);
  }

  submit(): void {
    if (this.form.valid) {
      emailjs.send('service_m5kpu9k', 'template_8y8rm8q', {
        name: this.form.controls['name'].value,
        mail: this.form.controls['mail'].value,
        calendar: this.form.controls['calendar'].value,
        rate: this.form.controls['rate'].value,
        message: this.form.controls['message'].value
      }, 'uzVFM_b-t4WV_Bpif')
      .then(() => {
        this.form.reset();
        this.isForm = false;
      });
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showForm():void{
    timer(300).subscribe(() => this.isForm = true)
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  };

}
