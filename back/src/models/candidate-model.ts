import mongoose from "mongoose"

const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
    lowercase: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => /^\d{10}$/.test(v),
      message: (props: { value: string }) =>
        `${props.value} is not a valid mobile number!`,
    },
  },
  dob: {
    type: String,
    required: true,
  },
  workex: {
    type: String,
    required: true,
  },
  resumeTitle: {
    type: String,
    required: true,
  },
  currentLocation: {
    type: String,
    required: true,
  },
  postalAddress: {
    type: String,
    required: true,
  },
  currentEmployer: {
    type: String,
    required: true,
  },
  currentDesignation: {
    type: String,
    required: true,
  },
})

const Candidate = mongoose.model("Candidate", CandidateSchema)
export default Candidate
