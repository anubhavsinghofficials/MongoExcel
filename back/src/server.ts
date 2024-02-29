import { app } from "./app.js"
import { connectDB } from "./config/db-connect.js"

connectDB()

const Port = process.env.PORT || 8001
export const server = app.listen(Port, () => {
  console.log("Listening at " + Port)
})
