'use client'
import Image from "next/image";
import React from "react";

const tag = [{ tagtext: "Shopping", tagremoveicon: "/material-photos/Home/homeheader/X.svg" }, { tagtext: "Recipes", tagremoveicon: "/material-photos/Home/homeheader/X.svg" }, { tagtext: "Kitchen", tagremoveicon: "/material-photos/Home/homeheader/X.svg" }, { tagtext: "News", tagremoveicon: "/material-photos/Home/homeheader/X.svg" }, { tagtext: "Food", tagremoveicon: "/material-photos/Home/homeheader/X.svg" }]

export default function Homeheader() {
    return (
        <div className="bg-[#E6E6E6] h-screen w-full flex justify-end min-sm:max-xl:flex-col min-sm:max-xl:items-center min-sm:max-xl:w-full min-sm:max-xl:h-full">
            {/* head container */}
            <div className="flex flex-col h-full justify-between mr-auto min-sm:max-xl:flex">
                {/* leftest of the container - images */}
                <Image src="/material-photos/Home/homeheader/before.svg" alt="fruit" width={50} height={50}></Image>
                <Image src="/material-photos/Home/homeheader/art3.svg" alt="fruit" width={100} height={100}></Image>
            </div>
            <div className="flex flex-col justify-center gap-[20px]">
                {/* left container - banner */}
                <div className="flex gap-[5px]">
                    {/* banner - text */}
                    <span className="text-[#F53E32] font-bold text-xl leading-6 align-middle font-poppins tracking-[0.48px] ">100%</span><span className="text-[#212529] font-bold text-xl leading-6 align-middle font-poppins tracking-[0.48px]">Organic Vegetables</span>
                </div>
                <div className="gap-[10px] flex flex-col h-[35vh]">
                    {/* banner - bold text */}
                    <p className="font-black arial leading-[68px] text-5xl align-middle w-[522.0599975585938px] h-[146px]">The best way to stuff your wallet.</p>
                    <p className="font-normal text-sm leading-[26.25px] tracking-[0.48px] align-middle font-poppins text-[#7A7A7A] w-[488.0400085449219px] h-[47.25px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                </div>
                <div className="flex w-[450px] h-[64px] rounded-[50px] bg-[#FFFFFF] pl-6 ">
                    {/* banner - input UI container */}
                    <div className="flex w-full gap-4">
                        {/* input - left input */}
                        <Image src="/material-photos/Home/homeheader/inputarrow.svg" alt="inputarrow" width={20} height={20}></Image>
                        <input type="email" placeholder="Your emaill address" className="placeholder:font-lato outline-0"></input>
                    </div>
                    <div className="flex">
                        {/* input - right input */}
                        <button className="bg-[#3BB77E] rounded-[50px] w-[157.5500030517578px] h-[64px] text-white text-base leading-[24px] text-center align-middle font-medium font-quicksand cursor-pointer tracking-[0.5px] overflow-hidden group relative">
                            <span className="group-hover:opacity-100 inset-0 bg-black/20 opacity-0 transition-all duration-300 absolute"></span>
                            <span className="relative z-20">Subscribe</span></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full justify-start relative bottom-3 min-sm:max-xl:bottom-0">
                {/* middle container -images */}
                <Image src="/material-photos/Home/homeheader/art2.svg" alt="fruit" width={80} height={80}></Image>
            </div>
            <div className="flex flex-col w-[60%] " >
                {/* right container - tag and images */}
                <div className="h-[50%] flex gap-[17px] w-full items-center min-sm:max-xl:flex-wrap  min-sm:max-xl:justify-center">
                    {/* upper section of the right container - tags */}
                    {tag.map((tagcontent, index) => (
                        <div key={index} className="relative group overflow-hidden w-fit cursor-pointer h-[46px] flex gap-[10px] items-center rounded-[30px] border-[1px] hover:border-black/20 border-[#ECECEC] bg-white shadow-[5px_5px_15px_0px_#0000000D]">
                            <div className="absolute bg-black/20 inset-0 duration-300 transition-all group-hover:opacity-100 opacity-0  "></div>
                            <Image src={tagcontent.tagremoveicon} alt="removeicon" className="ml-4 z-20  relative" width={10} height={10}></Image>
                            <span className={`${tagcontent.tagtext === "Recipes" ? "text-[#253D4E] relative z-20" : "text-[#3BB77E] relative z-20"}   font-bold text-base leading-6 pr-5 tracking-normal text-right align-middle font-quicksand`}>{tagcontent.tagtext}</span>
                        </div>
                    ))}
                </div>
                <div className="h-[50%] w-full flex ">
                    {/* bottom section of the right container - images */}
                    <div className="items-end  flex bg-[url('/material-photos/Home/homeheader/cabbage.svg')] min-sm:max-xl: bg-right-bottom bg-contain bg-no-repeat w-full h-full">
                        {/* cabbage picture background div container */}
                        <Image src="/material-photos/Home/homeheader/art.svg" alt="fruit" className="mb-10 ml-10 min-sm:max-xl:mb-0 min-sm:max-xl:ml-0 " width={100} height={100}></Image>
                    </div>
                </div>
            </div>
        </div>
    )

}