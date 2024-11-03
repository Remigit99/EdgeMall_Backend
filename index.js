import express, { urlencoded } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import ProductRoutes from "./Routes/ProductRoutes.js"

dotenv.config()
const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI).then( () => console.log("Db Connected")).catch((err) =>console.log(err))

app.use(express.json({limit: "10mb"}))
app.use(urlencoded({limit: "10mb", extended: true}))


app.use("/api/v1/products", ProductRoutes)


// app.get('/', (req, res) => res.send('Hello Tech World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))