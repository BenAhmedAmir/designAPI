"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var updates_1 = __importDefault(require("./updates"));
var products_1 = __importDefault(require("./products"));
var updatepoint_1 = __importDefault(require("./updatepoint"));
var auth_1 = __importDefault(require("./auth"));
var auth_2 = require("../modules/auth");
var router = (0, express_1["default"])();
router.use("/updates", auth_2.protect, updates_1["default"]);
router.use("/products", auth_2.protect, products_1["default"]);
router.use("/updatepoint", auth_2.protect, updatepoint_1["default"]);
router.use("/", auth_1["default"]);
exports["default"] = router;
//# sourceMappingURL=index.js.map