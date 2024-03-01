import Candidate from "@src/models/candidate-model.js"
import async from "async"
import { TCandidate } from "./excel-to-json.js"

export const addToDatabase = async (data: TCandidate[]) => {
  await new Promise((resolve, reject) => {
    async.eachSeries(
      data,
      async (candidate: TCandidate) => {
        const email = candidate.Email
        const existingCandidate = await Candidate.findOne({ email })
        if (!existingCandidate) {
          const requiredFields = [
            "Name of the Candidate",
            "Email",
            "Mobile No.",
            "Date of Birth",
            "Work Experience",
            "Resume Title",
            "Current Location",
            "Postal Address",
            "Current Employer",
            "Current Designation",
          ]

          const emptyField = requiredFields.find(field => !candidate[field])
          if (emptyField) {
            throw new Error(
              `Field '${emptyField}' is empty for candidate: ${candidate["Name of the Candidate"]}`
            )
          }
          const newCandidate = {
            name: candidate["Name of the Candidate"],
            email: candidate.Email,
            mobile: candidate["Mobile No."],
            dob: candidate["Date of Birth"],
            workex: candidate["Work Experience"],
            resumeTitle: candidate["Resume Title"],
            currentLocation: candidate["Current Location"],
            postalAddress: candidate["Postal Address"],
            currentEmployer: candidate["Current Employer"],
            currentDesignation: candidate["Current Designation"],
          }
          await Candidate.create(newCandidate)
        }
      },
      error => {
        if (error) {
          reject(error)
        } else {
          resolve("success")
        }
      }
    )
  })
}
