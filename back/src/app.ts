import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

import express from "express"
import cors from "cors"
import { excelRouter } from "./routes/data-route.js"

export const app = express()

app.use(cors({ origin: process.env.CLIENT }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/excel", excelRouter)
