import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MyProduct} from './products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private _url: string = "./assets/json/products.json";
  private _url: string = "api/products";
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<MyProduct[]>{
    return this.http.get<MyProduct[]>(this._url);
  }
}
