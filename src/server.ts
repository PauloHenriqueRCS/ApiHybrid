import app from "./app";
import logger from "./log/logger";

const port = 8080;

const server = new app().Start(port)
    .then(() =>
        logger.info("connect success"))
    .catch((error) => {
        logger.log("error", new Error("connect failed").message);
        process.exit(1);
    });

export default server;
