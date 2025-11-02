import { productdata } from "@/app/components/data/ProductData"
import ProductCardUI from "@/app/components/Ui/ProductCardUI"
import MySlider, { selectedproductorder } from "@/app/components/Ui/SwiperUI"
import React from 'react'
import { SwiperSlide } from "swiper/react"

export default function PopularProductsBox() {

  return (
            <section className="flex justify-center h-full w-full pb-30 ">
                {/* popular products container */}
                <div className="w-[1320px] h-[604.3900146484375px] flex flex-col items-center gap-[17px]">
                    {/* popular products box */}
                    <div>
                        {/* Box label */}
                        <h1 className="font-manrope text-[#2B2B2D] font-bold text-[32px] leading-[38.4px] tracking-[0.48px] text-center align-middle">Popular Products</h1>
                    </div>
                    <div>
                        {/* box text */}
                        <p className="font-poppins w-[595.3200073242188px] h-[42px] text-[#7A7A7A] font-normal text-[14px] leading-[22px] tracking-[0.48px] text-center align-middle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                    <div className="w-full">
                        {/* box product card display */}
                        <MySlider swipertype={"B"}>
                            {selectedproductorder.map((p)=>(<SwiperSlide key={p.id} >
                                <div className="min-[600px]:max-[763px]:w-[60%] min-[600px]:max-[763px]:mx-auto">
                            <ProductCardUI cardtype={"E"} {...p}  />
                            </div>
                       </SwiperSlide>     ))}
                        </MySlider>
                    </div>
                </div>
            </section>
  )
}

