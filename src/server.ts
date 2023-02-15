import express, { Request } from "express";
import routes from "./routes";
import morgan from "morgan";
import { protect } from "./modules/auth";
import {body, validationResult} from "express-validator";

const app = express();

app.use(morgan("dev"));
// Allow the client to send JSON
app.use(express.json());
// Allow the client to make query string parameters
express.urlencoded({ extended: true });

app.use("/api", routes);
export default app;
