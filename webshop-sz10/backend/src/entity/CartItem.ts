import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class CartItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @ManyToOne(type => Product, {
        eager: true
    })
    product: Product;
}
