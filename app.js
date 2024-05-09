import express from 'express'
import mongoose, { Model } from 'mongoose'
import userRouter from "./routes/user.js"
import { connectdb } from './database/connectdb.js'

import { config } from "dotenv"

const app = express()
config({
    path: "./database/config.env"
})
// mongoose.connect("mongodb://localhost:27017/", {
//     dbName: "nodeapi"
// }).then(() => console.log("database Connected")).catch((e) => console.log("error :", e))
connectdb()

// midlwares
app.use(express.json())
app.use("/users", userRouter)







app.get("/", (req, res) => {
    res.send("Nice Work")
})





app.listen(process.env.PORT, (req, res) => {
    console.log("Server is running on 3000");
})