export interface Product {
    id: string;
    title: string;
    description: string | null;
    price: number;
    imgUrl: string;
    brand: string | null;
    categories: string[];
}
