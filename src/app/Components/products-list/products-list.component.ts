import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  // ############################
  date1: Date = new Date();
  // date2:number=Date.now();
  // date3:string=new Date().toDateString();
  // ############################
  // intialize
  // constructor
  // 1-intialize data & 2-inject

  // one product
  // productsList: Iproduct[];
  Img: boolean = true;

  // Filter
  // x:string="Hello input";

  filteredProducts: Iproduct[] = [];

  _listFilter: string = '';
  // setter => set value , getter => property

  // get listFilter(): string {
  //   return this._listFilter;
  // }

  // set listFilter(value: string) {
  //   this._listFilter = value;

  //   console.log('In setter', value);

  //   this.filteredProducts = this.performFilter(value);
  //   console.log(this.filteredProducts);
  // }

  // Day4
  @Input() get listFilterInChild(): string {
    return this._listFilter;
  }

  set listFilterInChild(value: string) {
    this._listFilter = value;

    console.log('In setter', value);

    // this.filteredProducts = this.performFilter(value);
    // Day4
    // this.filteredProducts = this.prdService.performFilter(value);
    // console.log(this.filteredProducts);

    // Day5
    this.prdAPIService.getAllPrds().subscribe({
      next: (data) => {
        this.filteredProducts = data.filter((prd) =>
          prd.name.toLocaleLowerCase().includes(value)
        );
        console.log(this.filteredProducts);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // 1-decalre event
  @Output() newProductEvent = new EventEmitter<Iproduct[]>();
  // #############
  // tables, chairs, tv units
  // categoryID => tables: 1 , chairs :2 ,tv unit :3

  // Day4
  // inject service
  constructor(
    private prdService: ProductsService,
    private router: Router,
    private prdAPIService: ProductsWithApiService
  ) {
    // this.productsList = [
    //   {
    //     id: 1,
    //     name: 'Wilma 6-Seater Top Dining Table',
    //     price: 2000,
    //     quantity: 0,
    //     categoryID: 1,
    //     Material: 'Glass',
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/159801402-159801402-HC090418_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //   },
    //   {
    //     id: 5,
    //     name: 'Trixia 4-Seater Glass Top Dining Table',
    //     price: 30000,
    //     quantity: 8,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 25,
    //     name: 'Gasha Marble Top Side Table',
    //     price: 14000,
    //     quantity: 10,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 1,
    //     Material: 'Metal',
    //   },
    //   {
    //     id: 7,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 17,
    //     name: 'Ventura Fabric Dining Chair',
    //     price: 1500,
    //     quantity: 2,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 9,
    //     name: 'Boston Study Chair',
    //     price: 1000,
    //     quantity: 10,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 2,
    //     Material: 'Upholstered Seating',
    //   },
    //   {
    //     id: 10,
    //     name: 'Coby Extendable TV Unit',
    //     price: 13000,
    //     quantity: 0,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'Wood',
    //   },
    //   {
    //     id: 15,
    //     name: 'Accent TV Unit',
    //     price: 36999,
    //     quantity: 4,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'MDF',
    //   },
    //   {
    //     id: 55,
    //     name: 'Plymouth TV Unit',
    //     price: 40000,
    //     quantity: 3,
    //     PrdImgURL:
    //       'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
    //     categoryID: 3,
    //     Material: 'wood',
    //   },
    // ];
  }
  ngOnInit(): void {
    //  this.filteredProducts = this.productsList;
    // Day4
    // this.filteredProducts = this.prdService.getAllPrds();

    // Day5
    this.prdAPIService.getAllPrds().subscribe((data) => {
      this.filteredProducts = data;
      // console.log(this.filteredProducts);
    });

    // this.prdAPIService.getAllPrds().subscribe({
    //   next:(data)=>{console.log(data);
    //   },
    //   error:(err)=>{console.log(err);
    //   }
    // })
  }

  toggleImage() {
    this.Img = !this.Img;
  }

  //
  // performFilter(filterValue: string): Iproduct[] {
  //   filterValue = filterValue.toLocaleLowerCase();
  //   return this.productsList.filter((product: Iproduct) =>
  //     product.name.toLocaleLowerCase().includes(filterValue)
  //   );
  // }

  // Day4
  // sortPrds(){
  //   let sortedProducts=this.productsList.sort(function (a, b) {
  //     if (a.name < b.name) {
  //       return -1;
  //     }
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   // console.log(sortedProducts);

  //   this.newProductEvent.emit(sortedProducts);

  // }

  prdDetails(prdId: number) {
    this.router.navigate(['/prd', prdId]);
  }
}
