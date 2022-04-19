import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Controller } from "./base.controller";

export class UserController extends Controller {
    repository = getRepository(User);
}