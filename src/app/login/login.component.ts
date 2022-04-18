import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  password = '';

  login() {
    let user = this.usuario, pass = this.password;
    if (user !== '' && pass !== '') {
      console.log(user, pass);
    } 
  }
  ngOnInit(): void {
  }

}
