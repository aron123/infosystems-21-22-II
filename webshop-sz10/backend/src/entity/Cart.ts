import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItem";
import { User } from "./User";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, {
        eager: true
    })
    @JoinTable()
    user: User;

    @ManyToMany(type => CartItem, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    cartItems: CartItem[];
}