import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { SiliLinks } from 'src/assets/config/contacts';

@Component({
  selector: 'go-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.less']
})
export class OfferComponent implements OnInit {
  linksList!: {whatsApp: string, instagram: string,telegram:string, be:string};
  form!: FormGroup;
  formInputs = {
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
      },
      {
        title: 'feedback.inputs.five.title',
        placeholder: 'feedback.inputs.five.placeholder',
        controlName: 'phone'
      }
    ],
    area: {
      title: 'feedback.inputs.fourth.title',
      placeholder: 'feedback.inputs.fourth.placeholder',
      controlName: 'message'
    }
  }
  constructor(private router: Router, private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.linksList = SiliLinks;
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

  returnHome():void{
    timer(300).subscribe(() => this.router.navigate(['']))
  }

  openLink(link:string):void{
    timer(300).subscribe(() => window.open(link, '_blank'))
  }

}
