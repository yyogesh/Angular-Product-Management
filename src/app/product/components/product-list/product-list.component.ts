import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/Product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[] = [
    {
      "productId": 1,
      "productName": "Uncharted 4 : A Thief End ",
      "productCode": "PSG-0001",
      "releaseDate": "May 10, 2016",
      "description": "A Thief s End is an action-adventure video game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4 video game console. ",
      "cost": 2999,
      "price": 3999.290,
      "genre": "Action-adventure game ",
      "imageUrl": "assets/images/ps4-uncharted.jpeg",
      "starRating": 5
    },
    {
      "productId": 2,
      "productName": "Call of Duty: Infinite Warfare",
      "productCode": "PSG-0002",
      "releaseDate": "November 4, 2016",
      "description": " Infinite Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. ",
      "cost": 2599,
      "price": 4999.15,
      "genre": "First-Person Shooter",
      "imageUrl": "assets/images/ps4-call-of-duty.jpeg",
      "starRating": 3.1
    },
    {
      "productId": 5,
      "productName": "Assassin Creed Syndicate",
      "productCode": "PSG-0005",
      "releaseDate": "October 23, 2015",
      "description": "Assassin's Creed Syndicate is an action-adventure video game developed by Ubisoft Quebec and published by Ubisoft.",
      "cost": 6900,
      "price": 7000.89,
      "genre": "Action, Adventure",
      "imageUrl": "assets/images/ps4-standard-edition-assassin-s-creed-syndicate.jpeg",
      "starRating": 4.3
    },
    {
      "productId": 8,
      "productName": "The Witcher 3",
      "productCode": "PSG-0008",
      "releaseDate": "May 15, 2009",
      "description": "The Witcher 3: Wild Hunt is an open world action role-playing video game developed by CD Projekt RED.",
      "cost": 2995,
      "price": 3350.78,
      "genre": "Action role-playing game",
      "imageUrl": "assets/images/ps4-the-witcher.jpeg",
      "starRating": 3.8
    },
    {
      "productId": 10,
      "productName": "The Tomb Raider",
      "productCode": "PSG-0010",
      "releaseDate": "October 15, 2015",
      "description": "Rise of the Tomb Raider is an action-adventure video game developed by Crystal Dynamics and published by Square Enix.",
      "cost": 2000,
      "price": 2200.65,
      "genre": "Action",
      "imageUrl": "assets/images/ps4-the-tomb-raider.jpeg",
      "starRating": 3.2
    }
  ]
  selectedProduct: Product | undefined;

  displayedColumns: string[] = ['imageUrl', 'productName', 'productCode', 'releaseDate', 'description', 'starRating'];
  showImage = false;
  dataSource = new MatTableDataSource(this.products);
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
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
  }

  handleProductInfoVerification(cost: string) {
    this._snackBar.open(`Const verification done ${cost}`, 'close');
  }

}
