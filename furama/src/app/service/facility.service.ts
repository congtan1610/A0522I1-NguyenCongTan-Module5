import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../model/rent-type";
import {Type} from "../model/type";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  constructor(private httpClient:HttpClient) {
  }
  getAll():Observable<Facility[]>{
    return this.httpClient.get<Facility[]>("http://localhost:3000/facilitys");
  }
  getRentType():Observable<RentType[]>{
    return this.httpClient.get<RentType[]>("http://localhost:3000/rentTypes")
  }
  getType():Observable<Type[]>{
    return this.httpClient.get<Type[]>("http://localhost:3000/types");
  }
  addNew(facility:Facility):Observable<any>{
    return this.httpClient.post("http://localhost:3000/facilitys",facility);
  }
  delete(id:Number):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/facilitys/"+id);
  }
  findById(id:number):Observable<Facility>{
    return this.httpClient.get<Facility>("http://localhost:3000/facilitys/"+id);
  }
  putById(facility:Facility):Observable<any>{
    return this.httpClient.put("http://localhost:3000/facilitys/"+facility.id,facility);
  }
  findByName(name:String):Observable<Facility[]>{
    return this.httpClient.get<Facility[]>("http://localhost:3000/facilitys?name_like="+name);
  }
}
