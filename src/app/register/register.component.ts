import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  confirmarPass = '';

  constructor(public userService: UsersService) {}

  register() {
    // Creamos un objeto que contiene los datos del email. IMPORTANTE, los datos de los parametros deben ser 'email' y 'password', caso contrario la API lanzará error.
    const datosUsuario: { email: string; password: string } = {
      email: this.email,
      password: this.password,
    };

    // Conectamos el componente con el servicio e imprimimos el TOKEN en la consola (data).
    this.userService.register(datosUsuario).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
