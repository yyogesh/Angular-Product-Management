import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductSearchComponent } from './components/product-search/product-search.component';

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  declarations: [ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent],
  exports: [ProductListComponent]
})

export class ProductModule { }
