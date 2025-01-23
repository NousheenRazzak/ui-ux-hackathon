import React from "react"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

function TopHeader() {
    return(
        <header className="bg-black h-[38px] flex items-center justify-center w-full">
            <div className="bg-black flex lg:gap-52 xl:gap-96 md:justify-between xl:ms-[400px]">
            <p className=" text-white font-normal text-xs md:text-sm text-center">Sign up and get 20% off to your first order. <span className="font-medium underline">Sign Up Now</span></p>
            <X size={24} color="white" className="hidden lg:block"/>
            </div>
        </header>
    )
}

export default TopHeader

export function Header() {
    return(
        <header className="lg:h-[41px] lg:gap-10 flex items-center justify-between m-auto py-5 md:py-10 lg:w-5/6 px-4 xl:px-0">
            <div className="flex gap-2 lg:w-3/6 lg:justify-between items-center">
            <Sheet>
                <SheetTrigger>
                    <Menu className="md:hidden"/>
                </SheetTrigger>
                <SheetContent>
                <ul className="flex flex-col gap-6 mt-16">
                    <li className="py-2 underline">
                        <Link href="/product-detail">Shop</Link>
                    </li>
                    <li>
                        <Link href="/product-detail">On Sale</Link>
                    </li>
                    <li>
                        <Link href="/category">Category</Link>
                    </li>
                    <li>
                        <Link href="/product-detail">Brands</Link>
                    </li>
                    </ul>
                </SheetContent>
            </Sheet>

            {/* <Menu width={24} className="md:[hidden]"/> */}

            <h1 className="text-[32px] font-bold">SHOP.CO</h1>
            
            <ul className="text-sm lg:text-base font-normal lg:h-[22px] hidden md:flex items-center md:gap-5">
                <li>
                    <Link href="/product-detail">Shop</Link>
                </li>
                <li>
                    <Link href="/product-detail">On Sale</Link>
                </li>
                <li>
                    <Link href="/category">Category</Link>
                </li>
                <li>
                    <Link href="/product-detail">Brands</Link>
                </li>
            </ul>
            </div>
            
            <div className="flex gap-2 lg:w-3/6 md:justify-around">
            <div className="md:w-3/4 md:p-2 md:rounded-full md:bg-[#f0f0f0] md:flex md:gap-5">
                <Search size={24} className="md:text-gray-500"/>
                <input type="search" placeholder="Search for products.." className="md:w-3/5 bg-transparent hidden md:block"/>
            </div>
            
            <div className="flex gap-4 items-center">
            <Link href="/cart">
                <ShoppingCart size={24} />
            </Link>
                <CircleUserRound size={24} />
            </div>
            </div>
        </header>
    )
}