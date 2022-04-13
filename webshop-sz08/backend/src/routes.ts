import * as express from 'express';
import { ProductController } from './controller/product.controller';

export function getRoutes() {
    const router = express.Router();

    const productCtrl = new ProductController();

    router.get('/api/products', productCtrl.getAll);
    router.get('/api/products/search', productCtrl.search);
    router.get('/api/products/:id', productCtrl.getOne);
    router.post('/api/products', productCtrl.create);
    router.put('/api/products', productCtrl.update);
    router.delete('/api/products', productCtrl.delete);

    return router;
}
