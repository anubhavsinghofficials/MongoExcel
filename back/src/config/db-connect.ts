import mongoose from "mongoose"

export const connectDB = async () => {
  const dbUrl = `${process.env.DB_URL}/ExcelData`
  try {
    await mongoose.connect(dbUrl)
    console.log("Database connected")
  } catch (error) {
    console.log(error)
  }
}
