import { productdata } from "@/app/components/data/ProductData"
import ProductCardUI from "@/app/components/Ui/ProductCardUI"
import Link from "next/link"

export default function Dealsofthedayproducts() {
    const link = [{ href: "All Deals >" },]

    return (
        <div className="mx-16 flex flex-col gap-[43px] mt-[20px] mb-40 h-full">
            {/* Deals of the day products section container */}
            <div className="flex justify-between min-sm:max-xl:items-center  min-sm:max-xl:flex-wrap min-sm:max-xl:flex-col min-sm:max-xl:gap-10">
                {/* title - Link */}
                <div>
                    {/* title */}
                    <h1 className="font-bold text-3xl leading-9 tracking-normal align-middle font-quicksand text-[#253D4E] ">Deals Of The Day</h1>
                </div>
                <div className="flex gap-[19.68px] min-sm:max-xl:w-fit min-sm:max-xl:flex-wrap">
                    {/* Link */}
                    {link.map((lin, index) => (<Link href={"/"} key={index} className="min-sm:max-xl:fit font-normal text-base leading-6 tracking-normal align-middle font-lato text-[#7E7E7E] cursor-pointer transition-all duration-300 hover:text-[#3BB77E]">{lin.href}</Link>))}
                </div>
            </div >
            <div className="flex gap-[95px] min-sm:max-xl:flex-wrap  min-sm:max-xl:justify-center">
                {/* product cards container */}
                {productdata.slice(16, 20).map((p) => (<ProductCardUI cardtype={"C"} key={p.id} {...p} />))}
            </div>
        </div>
    )
}