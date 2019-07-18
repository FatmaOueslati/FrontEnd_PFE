import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {ProfilService} from '../profil.service';
import {TookenService} from '../../authentication/signin/tooken.service';

import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  providers: [ ProfilService , TookenService]
})
export class ValidationComponent implements OnInit {
  profile: any ;
  profileDetails: any;
  form: FormGroup;
  num = 5;

  name;
  email;
  phoneNumer;
  newPassword;
  oldPassword;


  constructor(private token: TookenService , private profilser: ProfilService) {
    this.profile = this.token.getUserID();
  }
  ngOnInit() {
    this.LoadLinks();
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }
  onSubmit(form) {
    console.log(form);
  }
  LoadLinks() {
    this.profilser.getProfile(this.profile).subscribe(data => {
      this.profileDetails = data ;
      console.log('haw profile details ' , this.profileDetails);
    });
  }
  updateProfile() {
    this.profileDetails.name = this.name;
    this.profileDetails.email =this.email;
    this.profileDetails.phone = this.phoneNumer;

    this.name = '';
    this.email = '';
    this.phoneNumer = '';
    this.newPassword = '';
    this.oldPassword = '';

    // this.profilser.updateProfile(this.profile, {
    //   this.name = '';
    // this.email = '';
    // this.phoneNumer = '';
    // this.newPassword = '';
    // this.oldPassword = '';
    // })

  }

}
