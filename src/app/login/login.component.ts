import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  // Inyectamos el servicio de emails (UsersService)
  constructor(public userService: UsersService) {}

  login() {
    // Creamos un objeto que contiene los datos del email. IMPORTANTE, los datos de los parametros deben ser 'email' y 'password', caso contrario la API lanzará error.
    const datosUsuario: { email: string; password: string } = {
      email: this.email,
      password: this.password,
    };
    // Conectamos el componente con el servicio e imprimimos el TOKEN en la consola (data).
    this.userService.login(datosUsuario).subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
}
