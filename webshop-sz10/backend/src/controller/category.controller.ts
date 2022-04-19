import { getRepository } from "typeorm";
import { Category } from "../entity/Category";
import { Controller } from "./base.controller";

export class CategoryController extends Controller {
    repository = getRepository(Category);

    stats = async (req, res) => {
        try {
            const stats = await this.repository.createQueryBuilder('category')
                .select('category.title, COUNT(*) AS productCount')
                .groupBy('category.title')
                .orderBy('productCount', 'DESC')
                .getRawMany();
            res.json(stats);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}