import Router from "express";
import updates from "./updates";
import products from "./products";
import updatepoint from "./updatepoint";
import auth from "./auth";
import { protect } from "../modules/auth";

const router = Router();
router.use("/updates", protect, updates);
router.use("/products", protect, products);
router.use("/updatepoint", protect, updatepoint);
router.use("/", auth);

export default router;
