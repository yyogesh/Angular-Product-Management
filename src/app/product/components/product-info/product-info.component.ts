import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined; // Parent to child // Product List ===> Product Info

  @Input() resusableCard: TemplateRef<any>;

  @Output() onVerify = new EventEmitter();  // Child to parent // Product info ==> Product list


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }



  onVerifyClick() {
    this.onVerify.emit(this.product?.cost);
  }
}
