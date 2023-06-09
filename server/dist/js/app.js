"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/api/v1", index_1.default);
var uri = "mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASS, "@cluster0.y452jie.mongodb.net/").concat(process.env.MONGO_DB, "?retryWrites=true&w=majority");
var port = process.env.PORT || 5000;
mongoose_1.default.connect(uri).then(function () {
    app.listen(port, function () {
        console.log("Server started on port ".concat(port));
    });
}).catch(function (error) {
    throw error;
});
