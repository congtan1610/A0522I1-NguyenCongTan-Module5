import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../login";

@Component({
  selector: 'app-simple-login',
  templateUrl: './simple-login.component.html',
  styleUrls: ['./simple-login.component.css']
})
export class SimpleLoginComponent implements OnInit {
  formLogin: FormGroup;
  arr: Array<Login> = [];
  acc: Login = {email: 'admin@gmail.com', password: 'admin1'};
  acc_check: Login;
  loginError: boolean;

  constructor() {
    this.formLogin = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)],
          [])
      }
    )
  }

  ngOnInit(): void {

  }

  login(formLogin: FormGroup) {
    if (this.formLogin.valid) {
      this.acc_check = formLogin.value;
      if (this.acc.email === this.acc_check.email && this.acc_check.password === this.acc.password) {
        this.loginError = false;
      } else this.loginError = true;
    }
  }
}
