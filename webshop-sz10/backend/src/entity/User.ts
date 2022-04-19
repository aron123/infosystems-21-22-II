import {Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, OneToMany} from "typeorm";
import { Product } from "./Product";

@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToMany(type => Product, product => product.uploader, {
        eager: false
    })
    products: Product[];
}
