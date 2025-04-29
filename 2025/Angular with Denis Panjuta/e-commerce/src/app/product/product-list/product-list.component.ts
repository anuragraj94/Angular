import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = '';

  /*constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) {}*/

  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  private readonly snackbar = inject(MatSnackBar);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open('Product added to cart', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder === 'priceLowHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'priceHighLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
}
