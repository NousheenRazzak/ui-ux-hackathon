"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronDownCircle } from "lucide-react";

const checkboxColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-orange-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-black",
];

export function CheckboxDemo() {
  return (
    <div className="p-5">
        <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl mb-4">Color</h1>
        <ChevronDown size={15}/>
        </div>
        <div className="flex flex-wrap gap-1">

            {checkboxColors.map((color, index) => (
              <div key={index} className="flex items-center space-x-1">
                <Checkbox
                  id={`checkbox-${index}`}
                  className={`h-[37px] w-[37px] rounded-full ${color}`}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
              
                </label>
              </div>
            ))}
            </div>
            <hr className="border-t-gray-200 mt-6"/>
    </div>
  );
}