import * as bodyParser from "body-parser";
import express from "express";

class App {
    private httpServer: any;

    constructor() {
        this.httpServer = express();
        this.httpServer.use(bodyParser.urlencoded({ extended: true }));
        this.httpServer.use(bodyParser.json());
    }

    public Start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.httpServer.listen(port, () => {
                resolve(port);
            }).on("error", (err: object) => reject(err));
        });
    }
}

export default App;
