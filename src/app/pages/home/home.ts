import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/componentes/header/header';
import { Footer } from "../../shared/componentes/footer/footer";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {

}
