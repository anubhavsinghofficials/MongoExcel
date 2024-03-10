import { useState } from "react"
import ClickToUpload from "./click-to-upload"
import TitleBar from "./title-bar"
import axios from "axios"
import ThankYouMessage from "./thank-you"

const ExcelInputBox = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const sendFile = async (formData: FormData) => {
    const server_url = import.meta.env.VITE_SERVER_URL
    try {
      setIsFormSubmitted(true)
      await axios.post(`${server_url}/excel`, formData)
    } catch (error) {
      setIsFormSubmitted(false)
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.error)
      } else {
        setErrorMessage("An error occured, Try again..")
      }
    }
  }

  return (
    <div className={`bg-white w-full h-full shadow-lg border-2`}>
      <TitleBar />
      <div className={`py-10 px-20 text-lg font-semibold flex flex-col gap-y-14`}>
        <h2>Add Candidates to Database</h2>
        <div
          className={`border-2 border-slate-300 h-44 flex flex-col items-center justify-between`}>
          {isFormSubmitted ? (
            <ThankYouMessage />
          ) : (
            <ClickToUpload
              onFileUpload={sendFile}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ExcelInputBox
