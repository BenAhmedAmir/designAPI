import express, {NextFunction, Request, Response} from "express";
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
app.get("/", (req:Request, res:Response) => {
    res.json({message:"Hallo!"});
})
app.use("/api", routes);
app.use((err:any, req:Request,res:Response,next:NextFunction) => {
    if(err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' });
    } else if (err.type === 'input'){
        res.status(400).json({ message: 'invalid input' });
    }
})
export default app;
