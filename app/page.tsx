import Image from "next/image";
// import { integralCF } from "@/app/fonts";
import Heroimage from "@/public/hero-image.png";
import Versace from "@/public/versace.png";
import Zara from "@/public/zaraa.png";
import Gucci from "@/public/gucci.png";
import Prada from "@/public/pradaa.png";
import Calvin from "@/public/calvinklein.png";
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
import { MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Casual from "@/public/dress-style-1.png";
import Formal from "@/public/dress-style-2.png";
import Party from "@/public/dress-style-3.png";
import Gym from "@/public/dress-style-4.png";

export default function Home() {
  return (
    <>
    <section className="bg-[#f2f0f1] lg:h-[529px] px-4 md:flex">
      <div className="md:w-2/4 lg:h-[500px] lg:gap-8 lg:ms-[100px] pt-10 lg:pt-24">
        <h1 className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className="w-full md:w-52 lg:h-[52px] bg-black rounded-full px-[54px] py-4 text-white text-center text-sm">Shop Now</button>
      </div>
      <div className="md:w-2/4 md:ms-32">
        <Image src={Heroimage} width={500} height={500} alt="hero-section-image"/>
      </div>
    </section>

    <section className="flex flex-wrap items-center justify-center lg:h-[122px] bg-black gap-7 lg:gap-14 px-4 py-6">
      <Image src={Versace} width={200} height={200} alt="versace" className="max-sm:w-28"/>
      <Image src={Zara} width={150} height={150} alt="zara" className="max-sm:w-16"/>
      <Image src={Gucci} width={200} height={200} alt="gucci" className="max-sm:w-28"/>
      <Image src={Prada} width={200} height={200} alt="prada" className="max-sm:w-28"/>
      <Image src={Calvin} width={200} height={200} alt="clavinklein" className="max-sm:w-32"/>
    </section>

    <section className="m-auto my-10 lg:my-24 border-b-2 border-gray-300">
    <div>
      <h2 className="lg:h-[58px] font-bold text-[32px] md:text-5xl mb-8 md:mb-14 leading-[57px] text-center">NEW ARRIVALS</h2>
    </div>
    <div className="flex gap-5 mt-10 max-sm:overflow-scroll justify-center">
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
        <Image src={NewA2} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl md:h-[298px]"/>
        <h4 className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Skinny Fit Jeans</h4>
        <div className="flex items-center mt-1 md:mt-2">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>3.5/5</span>
        </div>
        <p className="lg:text-2xl font-bold leading-8 flex flex-wrap items-center mt-1 md:mt-2">$240 <span className="text-gray-400 line-through ms-2">$260</span><span className="bg-red-100 text-red-600 text-sm rounded-3xl ms-2 px-3 py-2">-20%</span></p>
      </div>
      <div>
        <Image src={NewA3} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl"/>
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
    <div className="w-full px-4 sm:px-0 text-center my-10">
      <a className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">View All</a>
    </div>
    </section>

    <section className="m-auto my-24">
    <div className="mt-[90px]">
      <h2 className="lg:h-[58px] font-bold text-5xl leading-[57px] m-auto text-center">TOP SELLING</h2>
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
        <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2 flex flex-wrap">$212 <span className="text-gray-400 line-through ms-2">$232</span><span className="bg-red-300 text-red-500 ms-2 text-sm">-20%</span>
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
        <Image src={TopS4} width={295} alt="new-arrival-T-Shirt" className="rounded-3xl md:h-[298px]"/>
        <p className="lg:text-xl font-bold leading-7 mt-2 md:mt-4">Faded Skinny Jeans</p>
        <div className="flex items-center mt-1 md:mt-2">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <StarHalf size={18.5} fill="#ffc633" color="#ffc633" />
          <span>4.5/5</span>
        </div>
        <p className="lg:text-2xl font-bold leading-8 mt-1 md:mt-2">$210</p>
      </div>
    </div>
    <div className="w-full px-4 sm:px-0 text-center my-10">
      <a className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10" href="/shop#new-arrivals">View All</a>
    </div>
    </section>

    <section className="bg-[#f0f0f0] mx-4 md:mx-24 m-auto rounded-[40px] my-10 md:my-24 p-6">
    <div className="md:my-10">
      <h2 className="font-bold text-[32px] md:text-5xl md:leading-[57px] m-auto text-center">BROWSE BY DRESS STYLE</h2>
    </div>
    <div className="lg:w-full flex flex-wrap gap-6 justify-center">
      <Image src={Casual} width={200} height={289} alt="pic" className="w-[310px] h-[190px] max-sm:m-auto md:w-[407px] md:h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Casual</p> */}
      <Image src={Formal} width={200} height={289} alt="pic" className="w-[310px] h-[190px] md:w-[684px] max-sm:m-auto md:h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Formal</p> */}
      <Image src={Party} width={200} height={289} alt="pic" className="w-[310px] h-[190px] max-sm:m-auto md:w-[684px] md:h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Party</p> */}
      <Image src={Gym} width={200} height={289} alt="pic" className="w-[310px] h-[190px] max-sm:m-auto md:w-[407px] md:h-[289px] rounded-[20px]" />
        {/* <p className="w-[114px] h-[49px] mt-[25px] ms-9 font-bold text-4xl leading-[48px]">Gym</p> */}
    </div>
    </section>

    <section className="my-10 md:my-24 mx-4 md:mx-24">
      <div className="flex justify-between m-auto">
        <h2 className="lg:h-[58px] font-bold text-[32px] md:text-5xl md:leading-[57px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center md:items-end gap-3">
          <MoveLeft size={24} />
          <MoveRight size={24} />
        </div>
      </div>
      <div className="flex justify-between m-auto mt-10 max-sm:overflow-scroll gap-5">
        <div className="border border-gray-300 rounded-[20px] py-7 px-8">
          <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3">Sarah M. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
          <p className="text-gray-600 font-normal text-sm md:text-base leading-[22px]">I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.</p>
        </div>
        <div className="border border-gray-300 rounded-[20px] py-7 px-8">
        <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3">Alex K. <span><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
          <p className="text-gray-600 font-normal text-sm md:text-base leading-[22px]">Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.</p>
        </div>
        <div className="border border-gray-300 rounded-[20px] py-7 px-8">
        <div className="flex mb-3">
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          <Star size={18.5} fill="#ffc633" color="#ffc633" />
          </div>
          <h4 className="font-bold md:text-xl leading-[22px] flex mb-3">James L. <span className="ms-2"><CircleCheck size={24} fill="#01ab31" color="white" /></span></h4>
          <p className="text-gray-600 font-normal text-sm md:text-base leading-[22px]">As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</p>
        </div>
      </div>
    </section>
    </>
  );
}