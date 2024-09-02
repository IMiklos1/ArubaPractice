import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  selectedProduct?: Product;

  constructor(private productService: ProductService) { 
    productService.getProductById(51).subscribe( //just for test the 
      (data:Product) => {
        this.selectedProduct = data;
      },
      (error) => {
        console.log('Failed to load products', error);
      }
    );
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Failed to load products', error);
      }
    );
  }

  selectedChange(product:Product) {
    this.selectedProduct = product
  }
}
