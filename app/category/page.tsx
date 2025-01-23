import Image from 'next/image';
import { AccordionDemo } from '@/components/accordion'
import { CheckboxDemo } from '@/components/checkbox'
import { SliderDemo } from '@/components/slider'
import Size from "@/components/size";
import React from 'react'
import { DressStyle } from '@/components/dressStyle';
import NewA1 from "@/public/product1.png";
import NewA2 from "@/public/product2.png";
import NewA3 from "@/public/product3.png";
import NewA4 from "@/public/product4.png";
import TopS1 from "@/public/sell1.png";
import TopS2 from "@/public/sell2.png";
import TopS3 from "@/public/sell3.png";
import TopS4 from "@/public/sell4.png";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react"; 

function Category() {
  return (
    <main className='mb-20'>
      <div className="w-5/6 xl:w-5/6 m-auto">
        <hr className="border-t-gray-200 mb-6"/>
          <div>
              <ul className="flex gap-2 text-black/60 text-sm items-center mb-6">
                <li>Home</li>
                <ChevronRight size={15}/>
                <li className="text-black">Casual</li>
              </ul>
          </div>

          <section className="flex justify-center space-x-6">
              {/*Filter side*/}
              <div className="w-[295px] h-[1250px] border rounded-2xl p-2 max-sm:hidden">
                  <AccordionDemo/>
                  <SliderDemo/>
                  <CheckboxDemo/>
                  <Size/>
                  <DressStyle/>
              </div>
              {/*Right side*/}
              <div className="w-[900px]">
                <div className='flex justify-between'>
                  <h1 className="text-[32px] font-bold">Casual</h1>
                  <div className='flex items-center'>
                    <p className='text-gray-500 max-sm:hidden'>Showing 1-10 of 100 Products Sort by: <span className='text-black me-1 font-medium'>Most Popular</span></p>
                    <p className='text-gray-500 lg:hidden'>Showing 1-10 of 100 Products</p>
                    <ChevronDown size={15}/>
                  </div>
                </div>
              <div className="flex gap-5 mt-2 max-sm:overflow-scroll justify-center max-sm:flex-wrap">
            <div>
              <Image src={NewA1} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">T-shirt with Tape Details</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$120</p>
            </div>
            <div>
              <Image src={TopS3} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Checkered Shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$180</p>
            </div>
            <div className="lg:h-[298px]">
              <Image src={NewA3} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Sleeve Striped T-shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 flex flex-wrap items-center mt-1 md:mt-2">$130 <span className="text-gray-400 line-through ms-2">$160</span><span className="bg-red-100 text-red-600 text-sm rounded-3xl ms-2 px-3 py-2">-30%</span></p>
            </div>
          </div>
      
          <div className="flex gap-5 mt-10 max-sm:overflow-scroll justify-center max-sm:flex-wrap">
            <div>
              <Image src={NewA4} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">T-shirt with Tape Details</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$120</p>
            </div>
            <div>
              <Image src={TopS1} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Checkered Shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$180</p>
            </div>
            <div className="lg:h-[298px]">
              <Image src={TopS2} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Sleeve Striped T-shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 flex flex-wrap items-center mt-1 md:mt-2">$130 <span className="text-gray-400 line-through ms-2">$160</span><span className="bg-red-100 text-red-600 text-sm rounded-3xl ms-2 px-3 py-2">-30%</span></p>
            </div>
          </div>
      
          <div className="flex gap-5 mt-10 max-sm:overflow-scroll justify-center max-sm:flex-wrap">
            <div>
              <Image src={TopS3} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">T-shirt with Tape Details</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$120</p>
            </div>
            <div>
              <Image src={NewA1} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Checkered Shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$180</p>
            </div>
            <div className="lg:h-[298px]">
              <Image src={NewA4} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
              <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Sleeve Striped T-shirt</h4>
              <div className="flex items-center mt-1 md:mt-2">
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <Star size={18.5} fill="#ffc633" color="#ffc633" />
                <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                <span>4.5/5</span>
              </div>
              <p className="lg:text-2xl font-bold leading-8 flex flex-wrap items-center mt-1 md:mt-2">$130 <span className="text-gray-400 line-through ms-2">$160</span><span className="bg-red-100 text-red-600 text-sm rounded-3xl ms-2 px-3 py-2">-30%</span></p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

export default Category