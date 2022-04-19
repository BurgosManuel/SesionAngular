import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  // Inject Usersservicie y ruteo.
  constructor(public userService: UsersService, public router: Router) {}

  register() {
    // Creamos un objeto que contiene los datos del email. IMPORTANTE, los datos de los parametros deben ser 'email' y 'password', caso contrario la API lanzará error.
    const datosUsuario: { email: string; password: string } = {
      email: this.email,
      password: this.password,
    };

    // Conectamos el componente con el servicio y almacenamos el Token que nos retorna la API en el LocalStorage. Si la respuesta al registrar es positiva nos REDIRECCIONA al 'inicio'.
    this.userService.register(datosUsuario).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/perfil');
    });
  }

  ngOnInit(): void {}
}
