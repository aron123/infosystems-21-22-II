import { CartItem } from "./CartItem";
import { User } from "./User";

export interface Cart {
    id: number|null;
    user: User|null;
    cartItems: CartItem[];
}