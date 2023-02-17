"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var updatePointController_1 = require("../../controllers/updatePointController");
var middlewares_1 = require("../../modules/middlewares");
var express_validator_1 = require("express-validator");
var router = (0, express_1["default"])();
router.get("/");
router.get("/:id");
router.put("/:id", (0, express_validator_1.body)('name').optional(), (0, express_validator_1.body)('description').optional(), middlewares_1.handleInputErrors, updatePointController_1.putUpdatePoint);
router.post("/", (0, express_validator_1.body)('name').exists().isString(), (0, express_validator_1.body)('description').exists().isString(), middlewares_1.handleInputErrors, updatePointController_1.createUpdatePoint);
router["delete"]("/:id", middlewares_1.handleInputErrors, updatePointController_1.createUpdatePoint);
exports["default"] = router;
//# sourceMappingURL=index.js.map