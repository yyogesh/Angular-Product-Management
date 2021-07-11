import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CostPipe } from './pipes/cost.pipe';
import { ListFilterPipe } from './pipes/list-filter.pipe';
import { DemoMaterialModule } from '../material.module';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ElementHoverDirective } from './directives/element-hover.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, DemoMaterialModule, HttpClientModule],
  declarations: [ProductListComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    CostPipe,
    ListFilterPipe,
    ProductInfoComponent,
    ElementHoverDirective],
  exports: [ProductListComponent]
})

export class ProductModule { }
