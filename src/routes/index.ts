import Router from "express";
import updates from "./updates";
import products from "./products";
import updatepoint from "./updatepoint";
const router = Router();
router.use("/updates", updates);
router.use("/products", products);
router.use("/updatepoint", updatepoint);
export default router;
