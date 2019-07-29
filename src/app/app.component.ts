import { Component } from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public fb: FormBuilder) { }

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

  title = 'angular-dropdown-reactive-forms';

  registrationForm = this.fb.group({
    cityName: ['']
  })
  onSubmit() {
    alert(JSON.stringify(this.registrationForm.value))
  }

   // Choose city using select dropdown
   changeCity(e) {
    this.City.setValue(e.target.value, {
      onlySelf: true
    })
  }
}
