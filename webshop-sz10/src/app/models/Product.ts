import { Category } from "./Category";
import { User } from "./User";

export interface Product {
    id: string;
    title: string;
    description: string | null;
    price: number;
    imgUrl: string;
    brand: string | null;
    uploader: User;
    categories: Category[];
}
