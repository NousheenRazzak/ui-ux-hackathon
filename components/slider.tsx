import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { ChevronDown } from "lucide-react"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-5">
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl mb-4">Price</h1>
        <ChevronDown size={15}/>
        </div>
        <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[100%]", className)}
        {...props}
    />
    <div className="flex justify-between mt-1">
        <h1 className="font-bold">$50</h1>
        <h1 className="font-bold">$100</h1>
    </div>
    <hr className="border-t-gray-200 mt-6"/>
    </div>
  )
}
