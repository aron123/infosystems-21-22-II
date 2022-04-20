import * as express from 'express';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';

export function getRoutes() {
    const router = express.Router();

    const productCtrl = new ProductController();

    router.get('/api/products', productCtrl.getAll);
    router.get('/api/products/search', productCtrl.search);
    router.get('/api/products/:id', productCtrl.getOne);
    router.post('/api/products', productCtrl.create);
    router.put('/api/products', productCtrl.update);
    router.delete('/api/products', productCtrl.delete);

    const userCtrl = new UserController();
    router.get('/api/users', userCtrl.getAll);

    const categoryCtrl = new CategoryController();
    router.get('/api/categories', categoryCtrl.getAll);

    return router;
}
