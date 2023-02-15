import app from "./server";
import * as dotenv from "dotenv";
dotenv.config();
app.listen(3002, () => {
  console.log("listening on port 3002");
});
