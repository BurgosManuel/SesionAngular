import { Injectable } from '@angular/core';
// Importamos los módulos para HTTP y 'Observable'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Implementamos el servicio http
  constructor(private http: HttpClient) { }

  // El método 'login' del servicio realiza una llamada a la API de 'reqres' mediante POST y llevando un objeto 'user'.
  login(user: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }
  
  register(user:any): Observable<any> {
    return this.http.post('https://reqres.in/api/register', user);
  }

  // Creamos los getters y setters para almacenar y obtener el token desde y hacia el LOCAL STORAGE.
  setToken(token: string) {
    localStorage.setItem('Token', token);
  }

  getToken() {
    return localStorage.getItem('Token')
  }
}
