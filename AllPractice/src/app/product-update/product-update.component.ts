import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService, private  activatedRoute: ActivatedRoute,private route:Router) {
    this.activatedRoute.paramMap.subscribe(next => {
       const id  = next.get('id');
      if (id != null) {
        this.productService.findById(id).subscribe(nexta=>this.productForm.patchValue(nexta));
      }
    }, error => {
    }, () => {
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.productService.updateById(this.productForm.value).subscribe();
    this.route.navigateByUrl('/product/list');
  }
}
