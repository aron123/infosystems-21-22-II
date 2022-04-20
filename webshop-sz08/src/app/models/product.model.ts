import { Category } from "./category.model";
import { User } from "./user.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    imgUrl: string;
    brand: string;
    uploader: User;
    categories: Category[];
}
