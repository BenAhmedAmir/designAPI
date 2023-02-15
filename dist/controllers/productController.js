"use strict";
exports.__esModule = true;
exports.getProduct = void 0;
var express_1 = require("express");
var getProduct = function (req, res, next) {
    if (res === void 0) { res = express_1.response; }
    res.json({ message: "salem" });
};
exports.getProduct = getProduct;
//# sourceMappingURL=productController.js.map