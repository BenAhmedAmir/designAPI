"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.hashPassword = exports.comparePasswords = exports.protect = exports.createJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var createJWT = function (user) {
    var token = jsonwebtoken_1["default"].sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    return token;
};
exports.createJWT = createJWT;
var protect = function (req, res, next) {
    var bearer = req.headers.authorization;
    console.log(bearer);
    if (!bearer) {
        res.status(401);
        res.json({ message: "owww ya m3allem win da5el 🤬" });
        console.log("from protect negation");
        return;
    }
    //descruction
    var _a = bearer.split(" "), token = _a[1];
    if (!token) {
        res.status(401);
        res.json({ message: "owww ya m3allem rak ghalt 🤬" });
        return;
    }
    try {
        var user = jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
        console.log(user);
        req.user = user;
        next;
    }
    catch (e) {
        console.error(e);
        res.status(401);
        res.json({ message: "owww ya m3allem rak ghalt 🤬" });
        return;
    }
};
exports.protect = protect;
var comparePasswords = function (password, hashedPassword) {
    return bcrypt_1["default"].compare(password, hashedPassword);
};
exports.comparePasswords = comparePasswords;
var hashPassword = function (password) {
    return bcrypt_1["default"].hash(password, 5);
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=auth.js.map