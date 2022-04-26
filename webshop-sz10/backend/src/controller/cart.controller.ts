import { getRepository } from "typeorm";
import { Cart } from "../entity/Cart";
import { Controller } from "./base.controller";

export class CartController extends Controller {
    repository = getRepository(Cart);
}