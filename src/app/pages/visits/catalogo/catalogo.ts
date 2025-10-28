import { Component, OnInit } from '@angular/core';
import { Header } from "../../../shared/componentes/header/header";
import { Footer } from "../../../shared/componentes/footer/footer";
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from '../../../core/productservice';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-catalogo',
  imports: [Header, Footer,MatCardModule, MatButtonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Catalogo implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // 🔹 Simulación de carga desde base de datos o LocalStorage
    const savedProducts = localStorage.getItem('products');
    this.products = this.productService.getProducts();
    if (savedProducts) {
      // Si hay datos guardados en el LocalStorage, los usamos
      this.products = JSON.parse(savedProducts);
    }
  }
}
