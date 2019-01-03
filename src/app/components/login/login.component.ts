import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup

  constructor(private _form: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this._form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    if(this.loginForm.value.email == "atyler@gmail.com" && this.loginForm.value.password == "test"){
      localStorage.setItem('id_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0eWxlckBnbWFpbC5jb20iLCJpYXQiOjE1NDY1MzI3OTEsImV4cCI6MTU0NjYxOTE5MX0.5h-xFqMRzSUsI-LPSrEoq8G9rQiWu3c_FU7vrcsONB0");
    }
  }

}
