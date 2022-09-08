import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators, NgForm } from '@angular/forms';
import { MyValidators } from './my-validators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.title = 'Hello World!';
    this.formGroup = fb.group({
      'name': ['', Validators.required, MyValidators.notstring('Guest')],
      'email': ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
