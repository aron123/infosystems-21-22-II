import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return lastValueFrom(this.http.get<Product[]>('/api/products'));
  }

  getProduct(id: number) {
    return lastValueFrom(this.http.get<Product>(`/api/products/${id}`));
  }

  searchProducts(query: string) {
    return lastValueFrom(this.http.get<Product[]>('/api/products/search', {
      params: {
        search: query
      }
    }));
  }

  createProduct(product: Product) {
    return lastValueFrom(this.http.post<Product>('/api/products', product));
  }

  updateProduct(product: Product) {
    return lastValueFrom(this.http.put<Product>('/api/products', product));
  }
}
