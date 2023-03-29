import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private route: Router) {
    this.productService.getAll().subscribe(next =>
      {
        this.products = next
      }
    );

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return  this.products;
  }

  check(id,name) {
    if (confirm('Are you sure you want to delete ' +name  + '?') == true) {
      this.productService.deleteById(id).subscribe(next=>{
        location.reload();
      });

    }
  }
}
