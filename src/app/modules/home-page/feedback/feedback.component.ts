import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays} from 'date-fns';
import { Inputs } from 'src/app/models/inputs';


@Component({
  selector: 'go-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less']
})
export class FeedbackComponent implements OnInit{
  private today = new Date();
  form!: FormGroup;
  formInputs: Inputs = {
    inputs: [
      {
        title: 'Как к вам обращаться',
        placeholder: 'Имя',
        controlName: 'name'
      },
      {
        title: 'Email',
        placeholder: 'Email',
        controlName: 'mail'
      }
    ],
    calendar: {
      title: 'Дата',
      placeholder: 'Выберите дату проведения мероприятия',
      controlName: 'calendar'
    },
    area: {
      title: 'Сообщение',
      placeholder: 'Задайте вопрос или уточните детати будующего заказа',
      controlName: 'message'
    }
  }
 
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required, Validators.email]],
      calendar: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  submit(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  };
}
