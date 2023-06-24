import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css']
})
export class ProductParentComponent {
  listFilter:string = '';

  prds:Iproduct[]=[];
  sortedProduct(allSorted:any){

    this.prds.push(allSorted);
  }
}
