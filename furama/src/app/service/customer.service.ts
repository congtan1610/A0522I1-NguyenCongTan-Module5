import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";
import {RentType} from "../model/rent-type";
import {Type} from "../model/type";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TypeCus} from "../model/type-cus";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers");
  }

  getTypeCus(): Observable<TypeCus[]> {
    return this.httpClient.get<TypeCus[]>("http://localhost:3000/typeCus");
  }

  addNew(cus: Customer): Observable<any> {
    return this.httpClient.post("http://localhost:3000/customers", cus);
  }

  delete(id: Number): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/customers/" + id);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:3000/customers/" + id);
  }

  putById(cus: Customer): Observable<any> {
    return this.httpClient.put("http://localhost:3000/customers/" + cus.id, cus);
  }

  findByName(name: String): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers?name_like=" + name);
  }
}
