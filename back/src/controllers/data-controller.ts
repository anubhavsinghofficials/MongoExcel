import { Request, Response } from "express"
import { excelToJson } from "@src/helpers/excel-to-json.js"
import { addToDatabase } from "@src/helpers/database-operations.js"
import fs from "fs"

export const addToExcel = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file provided" })
  }
  try {
    const data = excelToJson(req.file.path)
    await addToDatabase(data)
    fs.unlinkSync(req.file.path)
    res.status(200).json({ message: "success" })
  } catch (error) {
    fs.unlinkSync(req.file.path)
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    } else {
      return res.status(400).json({ error: "Unknown error occured" })
    }
  }
}
