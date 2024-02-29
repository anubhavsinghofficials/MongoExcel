import { addToExcel } from "@src/controllers/data-controller.js"
import { upload } from "@src/helpers/multer.js"
import { Router } from "express"

export const excelRouter = Router()

excelRouter.route("/").post(upload.single("excel"), addToExcel)
