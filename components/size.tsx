import React from 'react'
import { ChevronDown } from 'lucide-react'

function size() {
  return (
    <div className="px-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl mb-4">Size</h1>
        <ChevronDown size={15}/>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 text-gray-500 text-sm">
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">XX-Small</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">X-Small</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">Small</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">Medium</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-black text-[#f0f0f0]">Large</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">X-Large</div>
            <div className="p-3 flex justify-center items-center rounded-[62px] bg-[#f0f0f0]">XX-Large</div>
        </div>
        <hr className="border-t-gray-200 mt-6"/>
    </div>
  )
}

export default size