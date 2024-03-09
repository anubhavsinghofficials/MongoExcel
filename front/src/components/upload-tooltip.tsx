import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react"

type TProps = {
  children: ReactNode
  open: boolean | undefined
}
const UploadTooltip = ({ children, open }: TProps) => {
  return (
    <TooltipProvider>
      <Tooltip
        delayDuration={100}
        open={open}
        onOpenChange={() => {}}>
        <TooltipTrigger className={`w-full h-full`}>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Instruction: Click to attach excel file</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default UploadTooltip
