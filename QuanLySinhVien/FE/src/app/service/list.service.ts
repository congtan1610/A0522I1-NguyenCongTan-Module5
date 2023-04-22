import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient:HttpClient) { }
  getAll(page:Number,name:string):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/students?page="+page+'&name='+name);
  }
  delete(id: Number): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/api/students/delete/" + id);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>("http://localhost:8080/api/students/find/" + id);
  }

  saveById(std: Student): Observable<any> {
    return this.httpClient.put("http://localhost:8080/api/students/save",std);
  }
  save(std: Student): Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/students/save", std);
  }
}
