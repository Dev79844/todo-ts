import { Router } from "express";
import {getTodos, addTodo, updateTodo, deleteTodo} from '../controllers/todos/index'

const router: Router = Router()

router.route("/todos").get(getTodos).post(addTodo)
router.route("/todo/:id").put(updateTodo).delete(deleteTodo)

export default router