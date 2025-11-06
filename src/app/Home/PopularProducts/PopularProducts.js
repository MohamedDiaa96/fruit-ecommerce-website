import { productdata } from "@/app/components/data/ProductData"
import ProductCardUI from "@/app/components/Ui/ProductCardUI"
import React from "react"

export default function PopularProducts () {

    const filtercategories = [{ filtercateg: "All" },
    { filtercateg: "Milks & Dairies" },
    { filtercateg: "Coffes & Teas" },
    { filtercateg: "Pet Foods" },
    { filtercateg: "Meats" },
    { filtercateg: "Vegetables" },
    { filtercateg: "Fruits" }]



    return (
            <div className="mx-16 flex flex-col gap-[43px]">
                {/* Popular Products section container */}
                <div className="flex justify-between min-sm:max-xl:items-center min-sm:max-xl:flex-wrap min-sm:max-xl:flex-col min-sm:max-xl:gap-10">
                    {/* title - filter Categories */}
                    <div>
                        {/* title */}
                        <h1 className="font-bold text-3xl leading-9 tracking-normal align-middle font-quicksand text-[#253D4E] ">Popular Products</h1>
                    </div>
                    <div className="flex gap-[19.68px] min-sm:max-xl:w-fit min-sm:max-xl:flex-wrap">
                        {/* filter Categories */}
                        {filtercategories.map((filter, index) => (<button key={index} className="min-sm:max-xl:fit font-semibold text-base leading-4 tracking-normal text-center align-middle font-quicksand text-[#253D4E] cursor-pointer transition-all duration-300 hover:text-[#3BB77E]">{filter.filtercateg}</button>))}
                    </div>
                </div>
                <div className="flex gap-[24px] flex-wrap w-360 min-sm:max-xl:w-fit  min-sm:max-xl:justify-center">
                    {/* home popular products container */}
                    {productdata.slice(0,10).map((product)=>(<ProductCardUI 
                    cardtype={"A"}
                    key={product.id}
                    id={product.id}
                    tag={product.tag}
                    img={product.img}
                    category={product.category}
                    title={product.title}
                    star={product.star}
                    ratingnumber={product.ratingnumber}
                    manufacturer={product.manufacturer}
                    discountedprice={product.discountedprice}
                    originalprice={product.originalprice}
                    />)) }
                </div>
            </div>
    )
}