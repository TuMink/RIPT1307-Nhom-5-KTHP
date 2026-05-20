export interface ICategory {
  id: string;
  name: string;
  order: number;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  description: string;
  image: string;
  isAvailable: boolean;
}

export interface ITopping {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
}