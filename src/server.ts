import app from "./app";
import "./utils/config"
import logger from "./logger";


const port = 3333;

const start = (port: number) => {
    try {
        new Promise((resolve, reject) => {
            app.listen(port, () => {
                resolve(port);
            });
        });
        return logger.info("connect success");
    }
    catch (error) {
        logger.log("error", new Error("connect failed").message);
        process.exit(1);
    }
}


start(port)