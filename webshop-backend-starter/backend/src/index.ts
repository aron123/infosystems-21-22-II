import "reflect-metadata";
import * as express from 'express';
import { createConnection, getRepository } from "typeorm";
import { config } from "../ormconfig";
import { User } from "./entity/User";

createConnection(config).then(async connection => {

    const app = express();

    app.use(express.json());

    app.get('/api/users', async (req, res) => {
        const repository = getRepository(User);

        try {
            const users = await repository.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    app.post('/api/users', async (req, res) => {
        const repository = getRepository(User);

        try {
            const user = repository.create(req.body);
            await repository.save(user);
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    app.listen(3000, () => {
        console.log('Listening on :3000 ...');
    });

}).catch(error => console.log(error));
