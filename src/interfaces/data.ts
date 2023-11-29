export interface DataExample {
  count: string;
  next: string;
  previous: string;
  results: [{ name: string; url: string }];
}

export interface Products{
  id?:number;
  nombre:string;
  precio: number;
  descripcion: string;
  image: string;
  created_on?:string
}

export interface ProductsModificable{
  nombre:string;
  precio: number;
  descripcion: string;
  image: string;
}
