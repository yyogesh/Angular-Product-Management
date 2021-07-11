import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  subject = new Subject<string>();

  constructor() { }

  getServiceName() {
    return ProductDetailService.name
  }

  setFilterValue(value: string) {
    this.subject.next(value);
  }
}
