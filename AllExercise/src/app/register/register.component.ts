import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Register} from "../register";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  countrys: Array<string> = ['Viet Nam', 'Capuchino', 'Lao'];
  @Input()
  registers: Array<Register> = [];
  formRegister: FormGroup;
  constructor() {
    this.formRegister = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(6) ]),
      confirmPass: new FormControl("", [ Validators.required]),
      country: new FormControl("",[ Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^(84)+[\\d]{9,10}$")])
    }, [this.checkConfirmPass("password", "confirmPass")])
  }

  checkConfirmPass(password1: string, confirmPass1: string) {
    return function (form: AbstractControl) {
      const pass = form.get(password1)?.value;
      const passCon = form.get(confirmPass1)?.value;
      if (pass === passCon) {
        return null
      }
      return {passConfirmError: true}
    }
  }

  ngOnInit(): void {
  }

  addRegister(formRegister: FormGroup) {

    if (this.formRegister.valid) {
      this.registers.push(formRegister.value);
    }
  }

}
