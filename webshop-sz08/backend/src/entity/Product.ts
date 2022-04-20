import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column()
    price: number;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    brand: string;

    @ManyToOne(type => User, user => user.products, {
        eager: true,
        //cascade: true
    })
    uploader: User;

    @ManyToMany(type => Category, category => category.products, {
        eager: true
    })
    @JoinTable()
    categories: Category[];
}
