import { useRef, useState, MouseEvent, ChangeEvent } from "react"
import { MdUpload } from "react-icons/md"
import UploadTooltip from "./upload-tooltip"
import Button from "./ui/button"
import { checkExcelExtension } from "@/helper"

type TProps = {
  errorMessage: string
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
  onFileUpload: (formData: FormData) => void
}

const ClickToUpload = ({ errorMessage, setErrorMessage, onFileUpload }: TProps) => {
  const inputButtonRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | undefined>(undefined)
  const [showToolTip, setShowToolTip] = useState<boolean | undefined>(undefined)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (selectedFile) {
      const isValidFile = checkExcelExtension(selectedFile)
      if (isValidFile) {
        setFile(selectedFile)
        setShowToolTip(false)
        setErrorMessage("")
      } else {
        setErrorMessage("Invalid File Format !! Upload only excel files")
      }
    }
  }
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (file) {
      const formData = new FormData()
      formData.append("excel", file)
      onFileUpload(formData)
      setFile(undefined)
      if (inputButtonRef.current) {
        inputButtonRef.current.value = ""
      }
    }
  }

  return (
    <UploadTooltip open={showToolTip}>
      <div
        className={`h-full w-full p-4 flex flex-col items-center justify-between`}
        onClick={() => inputButtonRef.current?.click()}>
        <input
          type="file"
          onChange={handleFileChange}
          className={`hidden`}
          ref={inputButtonRef}
        />
        <div className={`rounded-full size-14 bg-black flex justify-center items-center`}>
          <MdUpload className={`text-white text-3xl`} />
        </div>

        {errorMessage && <p className={`text-red-600 font-semibold`}>{errorMessage}</p>}

        {file && !errorMessage ? (
          <>
            <p>{file.name}</p>
            <Button onClick={handleSubmit}>Submit</Button>
          </>
        ) : (
          <h3>Upload a .xlsx or .xls file here</h3>
        )}
      </div>
    </UploadTooltip>
  )
}

export default ClickToUpload
