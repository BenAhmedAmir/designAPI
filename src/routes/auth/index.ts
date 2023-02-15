import Router from "express";
import {createNewUser, signin} from "../../controllers/userController";

const router = Router();
router.post("/signup", createNewUser);
router.post("/signin", signin);
export default router;
