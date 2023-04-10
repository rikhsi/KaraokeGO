import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays} from 'date-fns';
import { timer } from 'rxjs';
import { Inputs } from 'src/app/models/inputs';

@Component({
  selector: 'go-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Input() isVisible!:boolean;
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

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required, Validators.email]],
      calendar: [null, Validators.required],
      rate: ['Стандарт'],
      message: [null, Validators.required]
    });
  }

  handleCancel(): void {
    timer(200).subscribe(() => this.isClosed.emit());
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
