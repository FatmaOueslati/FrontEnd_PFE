import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class TookenService {

  constructor() { }
  handle(token) {
    this.set(token);
  }
  set(token) {
    // localStorage.setItem('token', token);
    localStorage.setItem('token', token.token );
    localStorage.setItem('id', token.id );
    const decod = token.token ;
    const user = jwt_decode(decod);
    // console.log(this.getUserData());
  }
  getUserData () {
    const token = localStorage.getItem('token');
    const user = jwt_decode(token);
    // console.log('opaaaaaaaaaaaaaaaaaaaaaaaaaa' , user);
    return user;
  }
  getUserID () {
    const idUser = localStorage.getItem('id');
    return idUser;
  }
  get() {
    return localStorage.getItem('token');

  }
  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  isValid() {
    const token = this.get();
    // console.log(token);
    if (token) {
      // const payload = this.payload(token);
      // if (payload) {
      //     // return (Object.keys(this.iss).indexOf(payload.iss)) > -1 ? true : false ;
      //     return(payload.iss === 'http://127.0.0.1:8000/auth/login_check') ? true : false;
      // }
      return( (token) != null ) ? true : false ;
    }
    return false;
  }

  // payload(token) {
  //     // const payload = token.split('.')[1];
  //     const payload = token.split('.')[1];
  //     return this.decode(payload);
  // }
  //
  // decode(payload) {
  //     return JSON.parse(atob(payload));
  // }
  loggedIn() {
    return this.isValid() ;
  }
}
