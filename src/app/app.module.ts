import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LogoutComponent } from './logout/logout.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UsersService } from './users/users.service';
// Importamos el HttpClientModule para que no haya problemas con nuestro servicio
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    LogoutComponent,
    InicioComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // Importamos el servicio 'UsersService'
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
