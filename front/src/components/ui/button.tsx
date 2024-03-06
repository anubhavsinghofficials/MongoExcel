import { ComponentProps, FC } from "react"

const Button: FC<ComponentProps<"button">> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-green-600 text-white py-2 px-8 text-xl font-semibold rounded-lg flex items-center gap-x-2 hover:shadow-md hover:bg-green-500 active:shadow-none active:bg-green-700 duration-75`}>
      {children}
    </button>
  )
}

export default Button
