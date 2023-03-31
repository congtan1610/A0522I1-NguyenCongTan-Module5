import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "./category.service";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categorys:Category[];
  constructor( private httpClient:HttpClient,private categoryService:CategoryService) {
    this.categoryService.getAll().subscribe(next=>this.categorys=next);
  }

  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }

  saveProduct(product) :Observable<any>{
    return this.httpClient.post<Product>("http://localhost:3000/products",product);
  }

  findById(value): Observable<Product> {
    return this.httpClient.get("http://localhost:3000/products/"+value);
  }

  updateById(newProduct:Product):Observable<Product> {
  return this.httpClient.put<Product>("http://localhost:3000/products/"+newProduct.id,newProduct);
  }
  deleteById(value):Observable<any>{
   return this.httpClient.delete("http://localhost:3000/products/"+value);
  }
}
