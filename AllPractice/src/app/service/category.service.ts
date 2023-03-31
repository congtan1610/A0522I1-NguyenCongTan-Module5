import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Category[]> {
    return this.httpClient.get<Category[]>("http://localhost:3000/categorys");
  }
  saveCategory(category):Observable<any> {
    return this.httpClient.post("http://localhost:3000/categorys",category);
  }

  findById(id: number):Observable<Category> {
    return this.httpClient.get("http://localhost:3000/categorys/"+id);
  }

  updateCategory(id: number, category: Category):Observable<any> {
    return this.httpClient.put("http://localhost:3000/categorys/"+id,category);
  }

  deleteCategory(id: number):Observable<any> {
    return this.httpClient.delete("http://localhost:3000/categorys/"+id);
  }
}
