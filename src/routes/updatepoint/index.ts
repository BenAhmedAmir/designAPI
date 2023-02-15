import Router from "express";
import {createUpdatePoint, putUpdatePoint} from "../../controllers/updatePointController";
import {handleInputErrors} from "../../modules/middlewares";
import {body} from "express-validator";

const router = Router();
router.get("/");
router.get("/:id");
router.put("/:id",
    body('name').optional(),
    body('description').optional()
    ,handleInputErrors,putUpdatePoint);
router.post("/",
    body('name').exists().isString(),
    body('description').exists().isString(),
    handleInputErrors, createUpdatePoint);
router.delete("/:id",handleInputErrors, createUpdatePoint);
export default router;
