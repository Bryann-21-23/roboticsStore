import { Component } from '@angular/core';
import { Footer } from "../../../shared/componentes/footer/footer";
import { Header } from "../../../shared/componetesUsers/header-users/header-users";

@Component({
  selector: 'app-home-users',
  imports: [Footer,Header],
  templateUrl: './home-users.html',
  styleUrl: './home-users.css',
})
export class HomeUsers {

}
