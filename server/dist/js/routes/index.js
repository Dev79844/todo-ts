"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/todos/index");
var router = (0, express_1.Router)();
router.route("/todos").get(index_1.getTodos).post(index_1.addTodo);
router.route("/todo/:id").put(index_1.updateTodo).delete(index_1.deleteTodo);
exports.default = router;
