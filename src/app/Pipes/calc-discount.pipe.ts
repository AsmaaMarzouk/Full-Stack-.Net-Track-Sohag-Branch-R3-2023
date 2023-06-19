import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number,discountNumber:number=25): number {
    // value = 100 , discountNumber = 50%
    let disRes=discountNumber/100;// 50/100=.5
    let mulOriginalPriceByDisRes= value * disRes; //100*.5=50
    let subOriginalPrice=value-mulOriginalPriceByDisRes;// 100 - 50 = 50
    return subOriginalPrice;
  }

}
