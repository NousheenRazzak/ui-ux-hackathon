import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import ApplePay from "@/public/applepay.png";
import GooglePay from "@/public/gpay.png";
import Paypal from "@/public/paypal.png";
import Mastercard from "@/public/Badge.png";

function Footer() {
    return(
        <>
        <footer className="bg-[#f0f0f0]">
            {/* Newsletter Section */}
            <div className="bg-black rounded-[20px] lg:w-[1240px] md:h-[180px] px-8 md:px-16 py-8 md:py-9 flex flex-wrap max-sm:gap-8 items-center justify-between m-auto mx-4 md:mx-24">
                <h2 className="text-white lg:w-[551px] font-bold text-[32px] md:text-[40px] md:eading-[45px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className="w-full lg:w-[349px] h-[108px] gap-2">
                    <div className="flex items-center ps-5 gap-2 md:gap-4 h-12 rounded-full bg-white w-full">
                    <Mail size={20} color="gray" />
                    <input type="email" className="h-12 rounded-full font-normal text-sm md:text-base md:leading-[21px] text-gray-400 w-full" placeholder="Enter your email address"/>
                    </div>
                    <button className="bg-white h-12 rounded-full mt-2 font-medium text-sm md:text-base md:leading-[21px] w-full">Subscribe to Newsletter</button>
                </div>
            </div>
        
            {/* Footer Section */}
            <div className="lg:w-[1240px] md:h-[250px] m-auto border-b-[1px] border-gray-300 flex flex-wrap justify-between my-8">
                <div className="md:lg:w-[250px] mx-4 mb-10">
                <div className="">
                <h4 className="font-bold text-[28px] md:text[33px] md:leading-10">SHOP.CO</h4>
                <p className="font-normal text-sm leading-[22px] text-black/60 py-4">We have clothes that suits your style and which you are proud to wear. From women to men.</p>
                </div>
                <div className="flex gap-2">
                <div className="border border-black rounded-full p-2"><Twitter size={20} /></div>
                <div className="border border-black rounded-full p-2"><Facebook size={20} /></div>
                <div className="border border-black rounded-full p-2"><Instagram size={20} /></div>
                <div className="border border-black rounded-full p-2"><Github size={20} /></div>
                </div>
                </div>
                <div className="lg:w-[156px] h-44 footer max-sm:ms-4">
                    <p className="lg:w-[98px] h-[18px] font-medium text-base leading-[18px]">COMPANY</p>
                    <ul className="font-normal text-sm md:text-base leading-[19px] text-gray-600">
                        <li>About</li>
                        <li>Features</li>
                        <li>Works</li>
                        <li>Carrer</li>
                    </ul>
                </div>
                <div className="lg:w-[156px] h-44 footer max-sm:me-4">
                <p className="lg:w-[98px] h-[18px] font-medium text-base leading-[18px]">HELP</p>
                    <ul className="font-normal text-sm md:text-base leading-[19px] text-gray-600">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="lg:w-[149px] h-44 footer max-sm:ms-4">
                <p className="lg:w-[98px] h-[18px] font-medium text-base md:leading-[18px]">FAQ</p>
                    <ul className="font-normal text-sm md:text-base leading-[19px] text-gray-600">
                        <li>Account</li>
                        <li>Manage Deliveries</li>
                        <li>Orders</li>
                        <li>Payments</li>
                    </ul>
                </div>
                <div className="lg:w-[169px] h-44 footer max-sm:me-4">
                <p className="lg:w-[98px] h-[18px] font-medium text-base leading-[18px]">RESOURCES</p>
                    <ul className="font-normal text-sm md:text-base leading-[19px] text-gray-600">
                        <li>Free eBooks</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <div className="lg:w-[90%] flex flex-wrap justify-center md:justify-between text-center m-auto pb-8">
                <p className="lg:w-[269px] h-[19px] text-sm font-normal leading-[18px] text-gray-600 max-sm:pb-8">© 2000-2024, All rights reserved</p>
                <div className="flex flex-wrap gap-2">
                    <Image src={ApplePay} width={40} height={10} alt="Applepay" className="bg-white p-2 rounded-lg"/>
                    <Image src={GooglePay} width={40} height={10} alt="Applepay" className="bg-white p-2 rounded-lg"/>
                    <Image src={Paypal} width={40} height={10} alt="Applepay" className="bg-white p-2 rounded-lg"/>
                    <Image src={Mastercard} width={40} height={10} alt="Applepay" />
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer