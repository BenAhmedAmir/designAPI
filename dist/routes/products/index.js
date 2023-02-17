"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var productController_1 = require("../../controllers/productController");
var express_validator_1 = require("express-validator");
var middlewares_1 = require("../../modules/middlewares");
var router = (0, express_1["default"])();
router.get("/", productController_1.getProducts);
router.get("/:id", productController_1.getProduct);
router.put("/:id", (0, express_validator_1.body)('name').isString(), middlewares_1.handleInputErrors, productController_1.updateProduct);
router.post("/", productController_1.createProduct);
router["delete"]("/:id", productController_1.deleteProduct);
exports["default"] = router;
//# sourceMappingURL=index.js.map