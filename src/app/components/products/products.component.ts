import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatTableModule } from '@angular/material/table';
import { ProductInterface } from '../../interfaces/product-interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'table-basic-example',
  styleUrl: './products.component.scss',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule],
})

export class ProductsComponent {
  public products: Array<ProductInterface> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
