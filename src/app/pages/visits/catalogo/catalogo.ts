import { Component, OnInit } from '@angular/core';
import { Header } from "../../../shared/componentes/header/header";
import { Footer } from "../../../shared/componentes/footer/footer";
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Producto} from '../../../core/producto';
import {Datos} from '../../../core/datos';


@Component({
  selector: 'app-catalogo',
  imports: [Header, Footer,MatCardModule, MatButtonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalogo  {
 
  products: Producto[] = [];

  ngOnInit(): void {
    // Simulación de carga de base de datos local
    this.products = Datos;
  }

}
