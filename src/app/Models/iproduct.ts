export interface Iproduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  categoryID: number;
  Material: string;
  PrdImgURL?: string;
  details?:string;
}
