import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prdId: number = 0;
  // product:Iproduct ={} as Iproduct;
  product: Iproduct | undefined = undefined;

  // Day5

  searchResult:Iproduct[]=[];
  // ###########################
  // inject service
  constructor(
    private prdService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private prdApiService:ProductsWithApiService
  ) {}
  ngOnInit(): void {
    // convert from string to number
    // Number()  || parseInt() || +Value || value as number
    this.prdId = this.activatedRoute.snapshot.paramMap.get('productID')
      ? Number(this.activatedRoute.snapshot.paramMap.get('productID'))
      : 0;
    // console.log(this.prdId);

    // this.product=this.prdService.getPrdByID(this.prdId);
    //  console.log( this.product);

    // Day5


    this.prdApiService.getPrdByID(this.prdId).subscribe(data=>{
      this.product=data;
     console.log( this.product);

    })

  }

  searchWithMaterial(search:any){
    this.prdApiService.searchByMaterial(search).subscribe({
      next:(data)=>{

        this.searchResult=data;
        console.log(this.searchResult);

      },
      error:(err)=>{console.log(err);
      }
    })
  }
}
