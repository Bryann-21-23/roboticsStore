import { Component } from '@angular/core';
import { Header } from '../../../shared/componentes/header/header';
import { Footer } from '../../../shared/componentes/footer/footer';

@Component({
  selector: 'app-blog',
  imports: [Header, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
