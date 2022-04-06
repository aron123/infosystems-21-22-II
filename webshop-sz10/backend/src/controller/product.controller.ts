import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Controller } from "./base.controller";

export class ProductController extends Controller {
    repository = getRepository(Product);
}