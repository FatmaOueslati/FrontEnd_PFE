import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {TookenService} from './tooken.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [LoginService , TookenService],

})
export class SigninComponent implements OnInit {

  public form = {
    username: null,
    password: null
  };
  public error = null;
  constructor(private router: Router ,  private login: LoginService,
              private token: TookenService) {}

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.form);
    return this.login.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', data);
    // localStorage.setItem('id_token', data.token);
    this.router.navigateByUrl('/');
    this.token.handle(data);
    // this.auth.changeAuthStatus(true);
  }
  handleError(error) {
    this.error = error.error.error;
  }
}
