"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var updateController_1 = require("../../controllers/updateController");
var express_validator_1 = require("express-validator");
var middlewares_1 = require("../../modules/middlewares");
var router = (0, express_1["default"])();
router.get("/", updateController_1.getUpdates);
router.get("/:id", updateController_1.getUpdate);
router.put("/:id", (0, express_validator_1.body)('title').optional(), (0, express_validator_1.body)('body').optional(), (0, express_validator_1.body)('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(), (0, express_validator_1.body)('version').optional(), middlewares_1.handleInputErrors, updateController_1.putUpdate);
router.post("/", (0, express_validator_1.body)('title').exists().isString(), (0, express_validator_1.body)('body').exists().isString(), (0, express_validator_1.body)('productId').exists().isString(), middlewares_1.handleInputErrors, updateController_1.createUpdate);
router["delete"]("/:id", updateController_1.deleteUpdate);
exports["default"] = router;
//# sourceMappingURL=index.js.map