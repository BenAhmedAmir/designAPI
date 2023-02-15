"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var user_1 = require("../../handlers/user");
var router = (0, express_1["default"])();
router.post("/signup", user_1.createNewUser);
router.post("/signin", user_1.signin);
exports["default"] = router;
//# sourceMappingURL=index.js.map