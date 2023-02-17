import Router from "express";
import {createUpdate, deleteUpdate, getUpdate, getUpdates, putUpdate} from "../../controllers/updateController";
import {body} from "express-validator";
import {create} from "domain";
import {handleInputErrors} from "../../modules/middlewares";

const router = Router();
router.get("/", getUpdates);
router.get("/:id",getUpdate);
router.put("/:id",
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),
    handleInputErrors,
    putUpdate);
router.post("/",
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    handleInputErrors,
    createUpdate);
router.delete("/:id", deleteUpdate);
export default router;
