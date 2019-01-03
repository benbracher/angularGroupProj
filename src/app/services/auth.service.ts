import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/Token';

const Api_Url = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) { }
  login(loginInfo: any) {
    const str = 
    `grant_type=password&email=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    localStorage.setItem('str', str);
     return this._http.post(`${Api_Url}`, str).subscribe((token: Token) => {
       localStorage.setItem('id_token', token.access_token);
     });
  }
}
