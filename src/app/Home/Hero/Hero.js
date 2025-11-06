import ButtonUI from "@/app/components/Ui/ButtonUI";
import Link from "next/link";
import React from "react";

export default function Hero() {

    const herobanner = [{ text: "Everyday Fresh & Clean with Our Products", background: "bg-[url('/material-photos/Home/Hero/banner-1.svg')]" },
    { text: "Make your Breakfast Healthy and Easy", background: "bg-[url('/material-photos/Home/Hero/banner-2.svg')]" },
    { text: "The best Organic Products Online", background: "bg-[url('/material-photos/Home/Hero/banner-3.svg')]" }]
    return (
        <div className="flex justify-center gap-5 min-sm:max-xl:flex-wrap  min-sm:max-xl:justify-center">
            {/* hero container */}
            {herobanner.map((herocard, index) => (<div key={index} className={`${herocard.background} my-12 bg-contain bg-no-repeat bg-center flex flex-col justify-center w-[450px] h-[300px] rounded-[10px] `}>
                {/* hero card banner */}
                <div className={`flex flex-col ${index === 0 ? "gap-[15px]" : "gap-[45px]"} pl-10 min-sm:max-xl:flex-wrap`}>
                    {/* h1 and button box */}
                <h1 className={`text-[#253D4E] ${index === 0 ? "w-[203.1199951171875px] h-[87.58999633789062px]" : "w-[244.64999389648438px] h-[58.79999923706055px]"} leading-[25.8px] font-bold text-[20px] tracking-normal align-middle font-quicksand`}>{herocard.text}</h1>
                <Link href={"/Products"}><ButtonUI buttontype={"A"} text={"Shop Now"}  /></Link>
                </div>
            </div>))}
        </div>
    )
}