import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { productdata } from '../data/ProductData'
import ButtonUI from "./ButtonUI"

export default function ProductCardUI({ cardtype,id, tag, img,sort,title,star,ratingnumber,manufactorer,discountedprice,originalprice }) {
  return (
  <> {cardtype === "A" ? (<><Link href={`/Products/${id}`} className="w-[265px] h-[475.3800048828125px] flex flex-col border-[1px] border-[#ECECEC] rounded-[15px]">
      {/* Card container */}
      <div className="flex">
        {/* card tag */}
        <div className={`w-[60.22999954223633px] h-[31px] rounded-tl-[15px] rounded-br-[20px] flex justify-center items-center ${tag === "Hot" ? "bg-[#F74B81]" : tag === "Sale" ? "bg-[#67BCEE]" : tag === "New" ? "bg-[#3BB77E]" : tag === "-14%" ? "bg-[#F59758]" : ""}`} ><h1 className='text-white font-lato font-normal text-[12px] leading-[12px] align-middle'>{tag}</h1></div>
      </div>
      <div>
        {/* image */}
        <Image src={img} width={246} height={246} alt="fruit"></Image>
      </div>
      <div className="mx-5">
        {/* card middle content container */}
      <div>
        {/* sort */}
        <p className="font-normal text-xs leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">{sort}</p>
      </div>
      <div>
        {/* Title */}
        <p className="font-medium text-sm leading-6 align-middle tracking-[0.48px] text-[#2B2B2D] font-poppins">{title}</p>
      </div>
      <div className="flex items-center">
        {/* rating */}
        <div>
          {/* star */}
          <Image src={star} alt="star" width={57} height={12}></Image>
        </div>
        <div>
          {/* rating number */}
          <span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">({ratingnumber})</span>
        </div>
        </div>
        <div>
          {/* manufactored by */}
          <span className="flex gap-1 font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#B6B6B6]">By{manufactorer === "NestFood" && id === 1 ? (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#F53E32]">{manufactorer}</span>) : (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#3BB77E]">{manufactorer}</span>)}</span>
        </div>
        <div className="flex gap-[40px] mt-5 items-center">
          {/* price and button */}
          <div className="flex gap-[10.46px]">
            {/* price */}
            <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">{discountedprice}</span>
            <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">{originalprice}</span>
          </div>
          <div>
            {/* button */}
            <ButtonUI buttontype={"A"} text={"Add"} onclick={(e)=>{e.preventDefault(); e.stopPropagation()}} />
          </div>
        </div>
      </div>
    </Link></>): cardtype === "B" ? <Link></Link> : ""} </>
  )
}

