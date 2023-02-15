"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var productController_1 = require("../../controllers/productController");
var router = (0, express_1["default"])();
router.get("/", productController_1.getProduct);
router.get("/:id");
router.put("/:id");
router.post("/");
router["delete"]("/:id");
exports["default"] = router;
//# sourceMappingURL=index.js.map