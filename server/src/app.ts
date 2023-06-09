import express, {Express} from "express"
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"
import todoRoutes from "./routes/index"

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan("dev"))
app.use("/api/v1",todoRoutes)

const uri:string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.y452jie.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const port: string | number = process.env.PORT || 5000

mongoose.connect(uri).then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
}).catch(error => {
    throw error
})