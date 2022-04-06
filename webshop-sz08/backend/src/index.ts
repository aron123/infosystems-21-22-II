import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User} from "./entity/User";
import * as express from "express";
import { Product } from "./entity/Product";

createConnection().then(async connection => {

    const app = express();

    app.use(express.json());

    app.get('/api/users', async (req, res) => {
        const repository = getRepository(User);

        try {
            const users = await repository.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    });

    app.post('/api/products', async (req, res) => {
        const body = req.body;
        const repository = getRepository(Product);
        const product = repository.create(body);

        try {
            const productInserted = await repository.save(product);
            res.json(productInserted);
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    });

    app.get('/api/products', async (req, res) => {
        const repository = getRepository(Product);

        try {
            const products = await repository.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    });

    app.get('/api/products/:id', async (req, res) => {
        const productId = req.params.id;
        const repository = getRepository(Product);

        try {
            const product = await repository.findOne(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found.' });
            }

            res.json(product);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    });

    app.put('/api/products', async (req, res) => {
        const repository = getRepository(Product);
        const product = repository.create(req.body as {});

        try {
            const existingProduct = await repository.findOne(product.id);
            if (!existingProduct) {
                return res.status(404).json({ message: 'Not existing product.' });
            }

            const modifiedProduct = await repository.save(product);
            res.json(modifiedProduct);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    });

    app.delete('/api/products/:id', async (req, res) => {
        const productId = req.params.id;
        const repository = getRepository(Product);

        try {
            const product = await repository.findOne(productId);

            if (!product) {
                return res.status(404).json({ message: 'Not existing product.' });
            }

            await repository.delete(product);

            res.status(200).send();
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    app.listen(3000, () => {
        console.log('Server listening on :3000 ...');
    });

}).catch(error => console.log(error));
