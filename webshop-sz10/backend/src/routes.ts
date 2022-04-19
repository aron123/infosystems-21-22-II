import * as express from 'express';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { UserController } from './controller/user.controller';

export function getRouter() {
    const router = express.Router();

    const productCtrl = new ProductController();
    const userCtrl = new UserController();
    const categoryCtrl = new CategoryController();

    router.get('/api/products', productCtrl.getAll);
    router.get('/api/products/search', productCtrl.search);
    router.get('/api/products/:id', productCtrl.getOne);
    router.post('/api/products', productCtrl.create);
    router.put('/api/products', productCtrl.update);
    router.delete('/api/products/:id', productCtrl.delete);

    router.get('/api/users', userCtrl.getAll);
    router.get('/api/users/:id', userCtrl.getOne);
    router.post('/api/users', userCtrl.create);
    router.put('/api/users', userCtrl.update);
    router.delete('/api/users/:id', userCtrl.delete);

    router.get('/api/categories', categoryCtrl.getAll);
    router.get('/api/cetegories/:id', categoryCtrl.getOne);
    router.post('/api/categories', categoryCtrl.create);
    router.put('/api/categories', categoryCtrl.update);
    router.delete('/api/categories/:id', categoryCtrl.delete);

    return router;
}