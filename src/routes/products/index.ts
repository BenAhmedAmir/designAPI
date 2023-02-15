import Router from "express";
import { getProduct } from "../../controllers/productController";

const router = Router();
router.get("/", getProduct);
router.get("/:id");
router.put("/:id");
router.post("/");
router.delete("/:id");
export default router;
