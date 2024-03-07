import { FaCheck } from "react-icons/fa"

const ThankYouMessage = () => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center`}>
      <p className={`text-lg py-1 text-green-600 font-bold`}>Thank you!</p>
      <div className={`text-sm py-1 flex justify-center items-center gap-x-2`}>
        <FaCheck className={`text-green-600`} />
        Files successfully uploaded
      </div>
      <p className={`text-sm py-1`}>Your records will be processed shortly</p>
    </div>
  )
}

export default ThankYouMessage
