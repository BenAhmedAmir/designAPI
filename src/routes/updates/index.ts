import Router from "express";
import {createUpdate, putUpdate} from "../../controllers/updateController";
import {body} from "express-validator";
import {create} from "domain";
import {handleInputErrors} from "../../modules/middlewares";

const router = Router();
router.get("/");
router.get("/:id");
router.put("/:id",
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(),
    handleInputErrors,
    putUpdate);
router.post("/",
    body('title').exists().isString(),
    body('body').exists().isString(),
    handleInputErrors,
    createUpdate);
router.delete("/:id");
export default router;
