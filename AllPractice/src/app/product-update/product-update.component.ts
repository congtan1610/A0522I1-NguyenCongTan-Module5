import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

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
    category: new FormControl()
  });
  categorys: Category[];
  constructor(private productService: ProductService, private  activatedRoute: ActivatedRoute, private route: Router, private categoryService: CategoryService) {
    this.categoryService.getAll().subscribe(next => this.categorys = next);
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.productService.findById(id).subscribe(nexta => {
          this.productForm.patchValue(nexta);
        });
      }
    }, error => {
    }, () => {
    })

  }

  ngOnInit(): void {
  }

  submit() {
    this.productService.updateById(this.productForm.value).subscribe(now => {
      this.route.navigateByUrl('/product/list');
    });

  }
}
