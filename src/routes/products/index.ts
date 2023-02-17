import Router from "express";
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct
} from "../../controllers/productController";
import {body, param} from "express-validator";
import {handleInputErrors} from "../../modules/middlewares";

const router = Router();
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id" , body('name').isString(),handleInputErrors,updateProduct);
router.post("/", createProduct);
router.delete("/:id",deleteProduct);
export default router;
