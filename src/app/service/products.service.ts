
import { Injectable } from '@angular/core';
import { Products } from '../model/products'; // import dell'interfaccia
import { Observable } from 'rxjs'; // serve per lo stoccaggio dati API
import { HttpClient } from '@angular/common/http';

//importo le API 

const PRODUCTS_GET_API = "http://localhost:3000/products"


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }


public getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(PRODUCTS_GET_API)
}
}