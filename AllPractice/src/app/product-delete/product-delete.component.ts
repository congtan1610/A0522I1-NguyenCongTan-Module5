import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private route:Router) {

    this.activatedRoute.paramMap.subscribe(next=>{
      const id=next.get('id');
      if (id!=null){
        this.productService.deleteById(parseInt(id));
        this.route.navigateByUrl('/product/list');
      }
    })
  }

  ngOnInit(): void {
  }

}
