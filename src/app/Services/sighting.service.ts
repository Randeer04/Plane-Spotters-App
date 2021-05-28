import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { confguration } from "../shared/appSettings ";

const baseUrl = confguration.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SightingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    var uri = baseUrl+"get/get-all";
    return this.http.get(uri);
  }

  get(id:number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    var uri = baseUrl+"create/create-sight";
    return this.http.post(uri, data);
  }

  update(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  search(data:any): Observable<any> {
    var uri = baseUrl+"get/search";
    return this.http.post(uri,data);
  }
}