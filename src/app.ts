import * as bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import logger from "./logger";
import cors from "cors"

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middlewares()
        //this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json())
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        mongoose.connect('', {
            useNewUrlParser: true
        })
    }

    private routes(): void {
        this.express.get('/', (req, res) => {
            return res.send('Ok')
        })
    }
}

export default new App().express
