import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = environment.apiUrl + '/products';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
