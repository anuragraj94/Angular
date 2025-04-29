import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly apiCartUrl = environment.apiUrl + '/cart';
  private readonly apiCheckoutUrl = environment.apiUrl + '/checkout';
  private readonly baseUrl = environment.apiUrl;

  private readonly http = inject(HttpClient);
  //constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    //return this.http.post<Product>(this.apiCartUrl, product);
    return this.http.post<Product>(`${this.baseUrl}/cart`, product).pipe(
      catchError((error) => {
        console.error('Failed to post cart items', error);
        return throwError(() => new Error('Failed to load cart'));
      })
    );
  }

  getCartItems(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.apiCartUrl);
    return this.http
      .get<Product[]>(`${this.baseUrl}/cart`)
      .pipe(catchError(this.handleError));
  }

  clearCart(): Observable<void> {
    //return this.http.delete<void>(this.apiCartUrl);
    return this.http
      .delete<void>(`${this.baseUrl}/cart`)
      .pipe(catchError(this.handleError));
  }

  checkout(products: Product[]): Observable<void> {
    //return this.http.post<void>(this.apiCheckoutUrl, products);
    return this.http
      .post<void>(`${this.baseUrl}/checkout`, products)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('CartService error:', error);
    return throwError(() => new Error('Failed to complete cart operation'));
  }
}
