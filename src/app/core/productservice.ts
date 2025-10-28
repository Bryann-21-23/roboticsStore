import { Injectable } from '@angular/core';
import { Producto } from '../core/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly STORAGE_KEY = 'products';

  constructor() {
    this.initLocalStorage();
  }

  // ✅ Inicializa el localStorage si no hay datos
  private initLocalStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      const defaultProducts: Producto[] = [
        {
          id: 1,
          name: 'Robot Asistente',
          description: 'Asistente doméstico inteligente con IA integrada.',
          imageUrl: 'https://material.angular.dev/assets/img/examples/shiba2.jpg',
          price: 1200,
          tipe: 'Asistente'
        }
      ];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(defaultProducts));
    }
  }

  // ✅ Obtiene todos los productos
  getProducts(): Producto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // ✅ Agrega un nuevo producto
  addProduct(product: Producto): void {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
  }

  // ✅ Limpia los productos (opcional)
  clearProducts(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
