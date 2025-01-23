import Image from "next/image";
import { ChevronRight } from "lucide-react";
import NewA1 from "@/public/new-arrival-1.png";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { Check } from "lucide-react";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { ChevronDown } from "lucide-react"; 
import { SlidersHorizontal } from "lucide-react";
import { CircleCheck } from "lucide-react";
import TopS1 from "@/public/sell1.png";
import TopS2 from "@/public/sell2.png";
import TopS3 from "@/public/sell3.png";
import TopS4 from "@/public/product4.png";

export default function ProductDetail() {
    return(
        <main>
            <div className="w-5/6 xl:w-5/6 m-auto">
                <hr className="border-t-gray-200 mb-6"/>
                <div>
                    <ul className="flex gap-2 text-black/60 text-sm items-center mb-6">
                        <li>Home</li>
                        <ChevronRight size={15}/>
                        <li>Shop</li>
                        <ChevronRight size={15}/>
                        <li className="text-black">T-Shirt with Tape Details</li>
                    </ul>
                </div>

                <section className="mb-5">
                    <div className="flex justify-between max-sm:flex-col">
                        <div className="w-full md:w-3/6 flex gap-5 md:p-5 max-sm:flex-col-reverse">
                            <div className="flex md:flex-col justify-between">
                                <div className="md:w-[152px] md:h-[167px] bg-[#f0f0f0] rounded-2xl border-black border">
                                    <Image src={NewA1} width={152} height={152} alt="new-arrival-T-Shirt" className="rounded-2xl"/>
                                </div>
                                <div className="md:w-[152px] md:h-[167px] bg-[#f0f0f0] rounded-2xl">
                                    <Image src={NewA1} width={152} height={152} alt="new-arrival-T-Shirt" className="rounded-2xl"/>
                                </div>
                                <div className="md:w-[152px] md:h-[167px] bg-[#f0f0f0] rounded-2xl">
                                    <Image src={NewA1} width={152} height={152} alt="new-arrival-T-Shirt" className="rounded-2xl"/>
                                </div>
                            </div>
                            <div className="md:w-[444px] md:h-[530px] bg-[#f0f0f0] flex items-center rounded-2xl">
                                <Image src={NewA1} width={444} height={550} alt="new-arrival-T-Shirt" className="rounded-2xl"/>
                            </div>
                        </div>
                        <div className="w-full md:w-3/6 md:p-5 max-sm:mt-5">
                            <h4 className="text-2xl md:text-[40px] md:leading-[48px] font-bold mb-5">ONE LIFE GRAPHIC T-SHIRT</h4>
                            <div className="items-center mt-1 md:mt-2 mb-4">
                                <div className="flex mb-5 items-center">
                                    <Star size={18.5} fill="#ffc633" color="#ffc633" />
                                    <Star size={18.5} fill="#ffc633" color="#ffc633" />
                                    <Star size={18.5} fill="#ffc633" color="#ffc633" />
                                    <Star size={18.5} fill="#ffc633" color="#ffc633" />
                                    <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
                                    <span className="ms-1 font-normal text-base">4.5/5</span>
                                </div>
                                <p className="text-xl md:text-[32px] font-bold leading-8 flex flex-wrap gap-2 items-center mt-1 md:mt-2">$260 <span className="text-gray-400 line-through ms-2">$300</span><span className="bg-red-100 text-red-600 text-md rounded-3xl text-base px-3 py-2">-40%</span></p>
                                <p className="font-normal text-base text-black/60 mt-4">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                            </div>
                            <hr className="border-t-gray-200 mb-4"/>
                            <p className="font-normal text-sm md:text-base text-black/60 mb-4">Select Colors</p>
                            <div className="flex gap-3 mb-4">
                                <div className="bg-[#4F4631] w-9 h-9 rounded-full flex justify-center items-center"><Check size={15} className="text-white"/></div>
                                <div className="bg-[#314F4A] w-9 h-9 rounded-full"></div>
                                <div className="bg-[#31344F] w-9 h-9 rounded-full"></div>
                            </div>
                            <hr className="border-t-gray-200 mb-4"/>
                            <p className="font-normal text-sm md:text-base text-black/60 mb-4">Choose Size</p>
                            <div className="flex gap-2 mb-4">
                                <div className="bg-[#f0f0f0] text-black/40 text-sm md:text-base rounded-[62px] py-2 md:py-3 px-4 md:px-6">Small</div>
                                <div className="bg-[#f0f0f0] text-black/40 text-sm md:text-base rounded-[62px] py-2 md:py-3 px-4 md:px-6">Medium</div>
                                <div className="bg-black text-white text-sm md:text-base rounded-[62px] py-2 md:py-3 px-4 md:px-6">Large</div>
                                <div className="bg-[#f0f0f0] text-black/40 text-sm md:text-base rounded-[62px] py-2 md:py-3 px-4 md:px-6">X-Large</div>
                            </div>
                            <hr className="border-t-gray-200 mb-4"/>
                            <div className="flex gap-3">
                                <div className="bg-[#f0f0f0] flex items-center py-4 px-5 rounded-[62px] w-2/6 text-sm md:text-base justify-between">
                                <Minus size={20} />
                                1
                                <Plus size={20} />
                                </div>
                                <div className="bg-black text-white text-center text-sm md:text-base rounded-[62px] py-4 px-6 md:px-[54px] w-3/5">Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <div className="flex mb-5">
                        <div className="w-2/6 border-b border-b-gray-300 pb-3 md:p-4 text-sm md:text-xl text-center text-black/60">Product Details</div>
                        <div className="w-2/6 border-b border-b-black pb-3 md:p-4 text-sm md:text-xl text-center text-black">Rating & Reviews</div>
                        <div className="w-2/6 border-b border-b-gray-300 pb-3 md:p-4 text-sm md:text-xl text-center text-black/60">FAQs</div>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <p className="font-bold text-xl md:text-2xl">All Reviews <span className="text-black/60 text-sm md:text-base">(451)</span></p>
                        </div>
                        <div className="flex gap-3">
                        <div className="bg-[#f0f0f0] flex items-center py-4 px-5 rounded-full justify-between">
                            <SlidersHorizontal size={20} />
                            </div>
                            <div className="bg-[#f0f0f0] text-black/40 text-base rounded-[62px] py-4 px-5 gap-3 items-center hidden md:block">
                            <p className="text-base font-medium text-black">Latest</p>
                            <ChevronDown size={15} className="text-black"/>
                            </div>
                            <div className="bg-black text-white text-center text-sm md:text-base rounded-[62px] py-4 px-5 md:px-[54px]">Write a Review</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 mb-5">
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white"/></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                        <div className="w-full md:w-[49%] lg:h-[240px] border border-gray-300 rounded-[20px] py-7 px-8">
                          <div className="flex mb-3">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          </div>
                          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3 items-center">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
                          <p className="text-black/60 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
                          <p className="font-medium text-base text-black/60 mt-5">Posted on August 14, 2023</p>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:px-0 text-center my-10">
                        <a className="w-full inline-block sm:w-[218px] px-[24px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">Load More Reviews</a>
                    </div>
                </section>

                <section className="m-auto my-10 md:my-24">
                    <div className="mt-[90px]">
                      <h2 className="lg:h-[58px] font-bold text-[32px] md:text-5xl leading-[57px] m-auto text-center">YOU MIGHT ALSO LIKE</h2>
                    </div>
                    <div className="flex gap-5 mt-10 justify-center max-sm:overflow-scroll">
                      <div>
                        <Image src={TopS1} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
                        <p className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Vertical Striped Shirt</p>
                        <div className="flex items-center mt-1 md:mt-2">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <span>5.0/5</span>
                        </div>
                        <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2 flex flex-wrap">$212 <span className="text-gray-400 line-through ms-2">$232</span><span className="bg-red-100 text-red-600 text-sm rounded-3xl ms-2 px-3 py-2">-20%</span>
                        </p>
                      </div>
                      <div>
                        <Image src={TopS2} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
                        <p className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Courage Graphic T-shirt</p>
                        <div className="flex items-center mt-1 md:mt-2">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <span>4.0/5</span>
                        </div>
                        <p className="lg:lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$145</p>
                      </div>
                      <div>
                        <Image src={TopS3} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
                        <p className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Loose Fit Bermuda Shorts</p>
                        <div className="flex items-center mt-1 md:mt-2">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <span>3.0/5</span>
                        </div>
                        <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$80</p>
                      </div>
                      <div>
                        <Image src={TopS4} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
                        <p className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Loose Fit T-Shirt</p>
                        <div className="flex items-center mt-1 md:mt-2">
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <Star size={18.5} fill="#ffc633" color="#ffc633" />
                          <span>5/5</span>
                        </div>
                        <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$210</p>
                      </div>
                    </div>
                </section>
            </div>
        </main>
    )
}