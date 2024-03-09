import { ImCross } from "react-icons/im"

const TitleBar = () => {
  return (
    <div className={`h-14 w-full px-4 bg-[#cac069] flex items-center justify-between`}>
      <h1 className={`font-semibold text-lg`}>Add from Excel</h1>
      <ImCross className="text-lg hover:scale-125 duration-75 active:scale-110" />
    </div>
  )
}

export default TitleBar
