import Image from "next/image";
import React from "react";

export default function Banner() {
    return (
        <div className="flex justify-center">
            {/* parent banner container */}
        <div className=" bg-blue-100 rounded-[20px] flex justify-between items-center mx-16 w-[91%] h-[417px] min-sm:max-xl:flex-col min-sm:max-xl:h-full min-sm:max-xl:text-2xl">
            {/* banner container */}
            <div className="px-16 flex flex-col justify-center min-sm:max-xl:items-center size-full gap-10" >
                {/* text - input box */}
                <div className="flex flex-col gap-5 min-sm:max-xl:items-center ">
                    {/* heading - text box */}
                    <h1 className="min-sm:max-xl:text-3xl min-sm:max-xl:w-full font-bold w-[529.4000244140625px] tracking-normal align-middle leading-[48px] text-4xl font-quicksand text-[#253D4E]">Stay home & get your daily needs from our shop</h1>
                    <span className="min-sm:max-xl:text-sm flex items-center gap-1 font-normal text-lg leading-6 tracking-normal align-middle font-lato text-[#7E7E7E]">Start Your Daily Shopping with <span className="min-sm:max-xl:text-sm  text-[#3BB77E] font-normal text-lg leading-6 tracking-normal align-middle font-lato">Nest Mart</span></span>
                </div>
                <div className="flex w-[450px] h-[64px] rounded-[50px] bg-[#FFFFFF] pl-6 ">
                    {/* banner - input UI container */}
                    <div className="flex w-full gap-4  min-sm:max-xl:items-center">
                        {/* input - left input */}
                        <Image src="/material-photos/Home/homeheader/inputarrow.svg" className=" min-sm:max-xl:size-[30px]" alt="inputarrow" width={20} height={20}></Image>
                        <input type="email" placeholder="Your emaill address" className="placeholder:font-lato outline-0 min-sm:max-xl:text-sm"></input>
                    </div>
                    <div className="flex ">
                        {/* input - right input */}
                        <button className=" bg-[#F53E32] rounded-[50px] w-[157.5500030517578px] h-[64px] text-white text-base leading-[24px] text-center align-middle font-medium font-quicksand cursor-pointer tracking-[0.5px] overflow-hidden group relative">
                            <span className="group-hover:opacity-100 inset-0 bg-black/20 opacity-0 transition-all duration-300 absolute"></span>
                            <span className="min-sm:max-xl:text-sm relative z-20">Subscribe</span></button>
                    </div>
                </div>
            </div>
            <div className=" w-[100%] h-[100%] flex items-end pr-10  min-sm:max-xl:justify-center">
                <Image src={"/material-photos/Home/Banner/worker.svg"} alt="worker" width={634.3900146484375} height={345.7300109863281}></Image>
                {/* worker image box */}
            </div>
        </div>
        </div>
    )
}