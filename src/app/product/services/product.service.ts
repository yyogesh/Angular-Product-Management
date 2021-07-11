import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //https://jsonplaceholder.typicode.com/users

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getProduct() {
    return this.http.get('assets/data/product.json').pipe(map(res => res as Product[]), catchError(res => throwError('Api does not respond', res)));
  }


  getProductByArray() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next([
          {
            "productId": 1,
            "productName": "Uncharted 4 : A Thief End ",
            "productCode": "PSG-0001",
            "releaseDate": "May 10, 2016",
            "description": "A Thief s End is an action-adventure video game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4 video game console. ",
            "cost": 2999,
            "price": 3999.29,
            "genre": "Action-adventure game ",
            "imageUrl": "assets/images/ps4-uncharted.jpeg",
            "starRating": 5
          }]);
      }, 1000)
    })
  }
}
