import { productdata } from "@/app/components/data/ProductData"
import ButtonUI from "@/app/components/Ui/ButtonUI"
import ProductCardUI from "@/app/components/Ui/ProductCardUI"
import MySlider from "@/app/components/Ui/SwiperUI"
import Link from "next/link"
import { SwiperSlide } from "swiper/react"



export default function Dailybestsellsproducts() {
    const filtercategories = [{ filtercateg: "Featured" },
    { filtercateg: "Popular" },
    { filtercateg: "New added" },]

    return (
        <div className="mx-16 flex flex-col gap-[43px] mt-[50px] h-full">
            {/* Daily best sells products section container */}
            <div className="flex justify-between min-sm:max-xl:items-center min-sm:max-xl:flex-wrap min-sm:max-xl:flex-col min-sm:max-xl:gap-10">
                {/* title - filter Categories */}
                <div>
                    {/* title */}
                    <h1 className="font-bold text-3xl leading-9 tracking-normal align-middle font-quicksand text-[#253D4E] ">Daily Best Sells</h1>
                </div>
                <div className="flex gap-[19.68px] min-sm:max-xl:w-fit min-sm:max-xl:flex-wrap">
                    {/* filter Categories */}
                    {filtercategories.map((filter, index) => (<button key={index} className="min-sm:max-xl:fit font-semibold text-base leading-4 tracking-normal text-center align-middle font-quicksand text-[#253D4E] cursor-pointer transition-all duration-300 hover:text-[#3BB77E]">{filter.filtercateg}</button>))}
                </div>
            </div >
            <div className="flex gap-[24px] min-sm:max-xl:flex-wrap min-sm:max-xl:justify-center">
                {/* product cards - banner container */}
                <div className="bg-[url('/material-photos/Home/Dailybestproducts/Banner.svg')] bg-cover bg-center w-[378.5px] h-[520px] rounded-[15px] flex items-center">
                    {/* banner */}
                    <Link className="mx-[49px] mt-[100.5px]" href="/Products"><ButtonUI buttontype={"B"} text={"Shop Now"} /></Link>
                </div>
                <MySlider swipertype={"A"} >
                    {/* product cards container */}
                    {productdata.slice(10,16).map((p) => (<SwiperSlide  key={p.id}>
                        <ProductCardUI cardtype={"B"}
                            {...p}
                        />
                    </SwiperSlide>
                    ))}

                </MySlider>
            </div>
        </div>
    )
}