'use client'
import { productdata } from '@/app/components/data/ProductData'
import FilterUI from "@/app/components/Ui/FilterUI"
import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI"
import MySlider from "@/app/components/Ui/SwiperUI"
import Image from "next/image"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { SwiperSlide } from "swiper/react"

export default function Productdetails() {
  const { productdetails } = useParams()
  const product = productdata.find((item) => item.id == productdetails)
  console.log(productdetails)

  const [imagepicker, setimagepicker] = useState(product?.imglist[0])

  return (
    <main >
      {/* product details container */}
      <OrangeBannerUI Title={"Product"} currentpath={"Home - product"} />
      <section className="flex">
        <div className="py-[100px] px-20 flex gap-6">
          {/* filterUI */}
          <FilterUI></FilterUI>
        </div>
        <div className="flex sm:max-xl:flex-col sm:max-xl:w-full sm:max-xl:items-center ">
          {/* product details container */}
          <div className="flex flex-col">
            {/* product images container */}
            <div className="pt-[100px] flex sm:max-[958px]:justify-center ">
              {/* main product image */}
              <Image src={imagepicker} width={469} className="bg-[#F7F7F8] sm:max-[958px]:w-[70%]  rounded-[5px] border border-[#E9E9E9]" height={469} alt={product.title}></Image>
            </div>
            <MySlider swipertype={"C"}>
              {/* other product images */}
              {product.imglist.map((il, index) => (
                <SwiperSlide key={index} className="pt-5 flex gap-3 " >
                  <Image onClick={() => { setimagepicker(il) }} src={il} width={83} className={`bg-[#F7F7F8] rounded-[5px] cursor-pointer border  ${imagepicker === il ? "border-[#F53E32]" : "border-[#E9E9E9]"}`} height={83} alt={product.title}></Image>

                </SwiperSlide>

              ))}
            </MySlider>

          </div>
          <div className="pt-[100px] pl-1.5">
            {/* product text container */}
            <div className="gap-[17px] flex flex-col [border-bottom:1px_solid_#E9E9E9] w-[471px] h-[118px] opacity-100 ">
              {/* title box */}
              <h1 className="font-[Segoe_UI] font-normal text-[22px] leading-[33px] tracking-[0.48px] align-middle text-[#2B2B2D]">{product.title}</h1>
              <p className="w-[466.9800109863281px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-[0.48px] align-middle">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
            </div>
            <div className="flex gap-2.5 py-6 items-center">
              {/* rating stars and number box */}
              <div className="flex gap-[4.94px]" >
                {/* rating stars */}
                {product.bronzestars.map((star, index) => (<Image key={index} src={star} width={15} height={14} alt={"star"}></Image>
                ))}
              </div>
              <div>
                {/* rating number */}
                <span className="font-poppins text-[#7A7A7A] font-normal text-[15px] leading-[26.25px] tracking-[0.48px] align-middle">({product.ratingnumber})</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {/* info text box */}
              <div className="flex items-center " >
                {/* text */}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Brand</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.manufacturer}</span>
              </div>
              <div className="flex items-center " >
                {/* text 2*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Flavour</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.Flavour}</span>
              </div>
              <div className="flex items-center " >
                {/* text 3*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Diet Type</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.diettype}</span>
              </div>
              <div className="flex items-center " >
                {/* text 4*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Weight</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.weight}</span>
              </div>
              <div className="flex items-center " >
                {/* text 5*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Speciality</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.Speciality}</span>
              </div>
              <div className="flex items-center " >
                {/* text 6*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Info</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.info}</span>
              </div>
              <div className="flex items-center " >
                {/* text 7*/}
                <span className="font-[Segoe_UI] w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Items</span>
                <span className="font-[Segoe_UI] w-[3%] font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">:</span>
                <span className="font-[Segoe_UI] font-normal text-[16px] leading-6 text-[#777777] tracking-[0.48px] align-middle">{product.items}</span>
              </div>
            </div>
            <div className="flex gap-2.5 bg-amber-600 py-8">
              {/* Price box */}
              <h2 className="font-poppins font-semibold text-[#F53E32] text-[24px] leading-[28.01px] tracking-[0.48px] align-middle">${product.discountedprice}</h2>
              <h2 className="font-poppins font-normal text-[16px] leading-7 text-[#7A7A7A] tracking-[0.48px] align-middle line-through">${product.originalprice}</h2>
            </div>
            <div>
              {/* weight options */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

