import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService, private route: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.productForm.valid){
      const product = this.productForm.value;
      this.productService.saveProduct(product).subscribe(next => this.route.navigateByUrl("/product/list"));
      // this.productForm.reset();
    }

  }
}
