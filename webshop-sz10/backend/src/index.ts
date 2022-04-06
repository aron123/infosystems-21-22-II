import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';
import { getRouter } from "./routes";

createConnection().then(async connection => {
    const app = express();

    app.use(express.json());

    app.use(getRouter());

    app.listen(3000, () => {
        console.log('Listening on port 3000 ...');
    });
}).catch(error => console.log(error));
