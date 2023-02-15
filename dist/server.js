"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1["default"])();
app.use((0, morgan_1["default"])("dev"));
// Allow the client to send JSON
app.use(express_1["default"].json());
// Allow the client to make query string parameters
express_1["default"].urlencoded({ extended: true });
app.use("/api", routes_1["default"]);
exports["default"] = app;
//# sourceMappingURL=server.js.map