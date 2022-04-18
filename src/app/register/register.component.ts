import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario = '';
  password = '';
  confirmarPass = '';

  register() {
    let user = this.usuario, pass = this.password;
    if (user !== '' && pass !== '') {
      console.log(user, pass);
    } 
  }
  ngOnInit(): void {
  }

}
