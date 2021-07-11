import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/Product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { environment } from '../../../../environments/environment';
import { ProductDetailService } from '../../services/product-detail.service';
import { ProductService } from '../../services/product.service';
import { from, interval, Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  // <input type="text" #lastNameInput />
  @ViewChild('lastNameInput') lastNameInputElement: ElementRef;

  products: Product[] = []
  selectedProduct: Product | undefined;
  productSubscription: Subscription;
  products$: Observable<Product[]>;
  displayedColumns: string[] = ['imageUrl', 'productName', 'productCode', 'releaseDate', 'description', 'starRating'];
  showImage = false;
  dataSource = new MatTableDataSource(this.products);

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar,
    private readonly _productDetailService: ProductDetailService,
    private readonly _productService: ProductService) {
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._productDetailService.getServiceName();
    console.log('lastNameInputElement ngOnInit ', this.lastNameInputElement, environment.apiURL);
    this.getUser();
    this.getProduct();
    this.products$ = this._productService.getProduct();

    // const internal$ = interval(1000);

    // internal$.subscribe(res => console.log('Stream 1 ', res));
    // internal$.subscribe(res => console.log('Stream 2 ', res));


    // const arrayDataObservable$ = from([1, 2, 3, 4, 5]);

    // arrayDataObservable$.pipe(
    //   tap(val => console.log('Value passing through the stream: ' + val)),
    //   filter(val => val > 2),
    //   map(val => val * 2)
    // ).subscribe(res => {
    //   console.log('arrayDataObservable', res);
    // })

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log('lastNameInputElement ngAfterViewInit ', this.lastNameInputElement)
  }

  openProductDetail(row: Product) {
    this.selectedProduct = row;
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this._productDetailService.setFilterValue(filterValue.trim().toLowerCase());
  }

  handleProductInfoVerification(cost: string) {
    this._snackBar.open(`Const verification done ${cost}`, 'close');
  }

  show(firstName: string) {
    console.log(firstName, this.lastNameInputElement.nativeElement.value);
  }


  getUser() {
    this._productService.getUser().pipe(map((res: any) => {
      const mapRes = res.map((item: any) => {
        item['fullName'] = `${item.username} ${item.name}`;
        return item;
      })
      return mapRes;
    }), filter(res => res.length > 0)).subscribe(res => {
      console.log(res);
    })
  }

  getProduct() {
    this.productSubscription = this._productService.getProduct().subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
    }, (err) => {
      console.log('error : ', err);
    })
  }


}
