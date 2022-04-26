import { Product } from "./Product";

export interface CartItem {
    id?: number;
    amount: number;
    product: Product;
}