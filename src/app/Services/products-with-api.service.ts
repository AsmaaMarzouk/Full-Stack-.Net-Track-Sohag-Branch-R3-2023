import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
// Day5
  constructor(private httpclient:HttpClient) { }
  getAllPrds():Observable<Iproduct[]>{
    // return this.httpclient.get<Iproduct[]>("http://localhost:3000/products");
    return this.httpclient.get<Iproduct[]>(`${environment.BaseApiUrl}/products`)
  }

  getPrdByID(prdID:number):Observable<Iproduct>{
    return this.httpclient.get<Iproduct>(`${environment.BaseApiUrl}/products/${prdID}`);
  }
  searchByMaterial(mat:string):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.BaseApiUrl}/products?Material=${mat}`);
  }
}
