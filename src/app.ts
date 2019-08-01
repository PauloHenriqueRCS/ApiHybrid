import * as bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import routes from './routes'
import logger from "./logger";




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
        this.express.use(routes)
    }
}

export default new App().express
