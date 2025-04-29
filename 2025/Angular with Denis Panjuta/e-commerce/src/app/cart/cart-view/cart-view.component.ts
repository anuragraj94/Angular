import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  //constructor(private cartService: CartService) {}
  private readonly cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }
}
