import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from '../services/confirmed.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'confirm_password')
    });
  }

  get controls(): any {
    return this.form.controls;
  }

  submit(): any {
    console.log(this.form.value);
  }

}
