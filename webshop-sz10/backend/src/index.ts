import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import * as express from 'express';
import { User } from "./entity/User";

createConnection().then(async connection => {
    const app = express();

    app.get('/api/users', async (req, res) => {
        const repository = getRepository(User);

        try {
            const users = await repository.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err.message);
        }
    });

    app.listen(3000, () => {
        console.log('Listening on port 3000 ...');
    });
}).catch(error => console.log(error));
