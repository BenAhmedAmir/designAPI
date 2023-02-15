import express, { Request } from "express";
import routes from "./routes";
import morgan from "morgan";
import { protect } from "./modules/auth";

const app = express();

app.use(morgan("dev"));
// Allow the client to send JSON
app.use(express.json());
// Allow the client to make query string parameters
express.urlencoded({ extended: true });
const customLogger = (msg: string) => (req: any, res: any, next: any) => {
  console.log(`hello from ${msg}`);
  next();
};
app.use(customLogger("ben ahmed amir"));
app.use("/api", protect, routes);

// app.use((req: any, res, next) => {
//   res.status(401);
//   res.send("LE3");
// });

export default app;
