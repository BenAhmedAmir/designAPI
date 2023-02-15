import Router from "express";
import {createProduct, getProduct, getProducts, updateProduct} from "../../controllers/productController";
import {body} from "express-validator";
import {handleInputErrors} from "../../modules/middlewares";

const router = Router();
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id" , body('name').isString(),handleInputErrors,updateProduct);
router.post("/", createProduct);
router.delete("/:id");
export default router;
