import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays} from 'date-fns';
import { Inputs } from 'src/app/models/inputs';
import emailjs from 'emailjs-com';

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
      emailjs.send('service_m5kpu9k', 'template_qamqqpd', {
        name: this.form.controls['name'].value,
        mail: this.form.controls['mail'].value,
        calendar: this.form.controls['calendar'].value,
        message: this.form.controls['message'].value
      }, 'uzVFM_b-t4WV_Bpif')
      .then(() => {
        this.form.reset();
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

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0;
  };
}
