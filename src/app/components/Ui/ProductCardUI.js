import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { productdata } from '../data/ProductData'
import ButtonUI from "./ButtonUI"

export default function ProductCardUI({ cardtype, id, tag, img, category, title, star, ratingnumber, manufacturer, discountedprice, originalprice, solditemsvalue }) {
  return (
    <> {cardtype === "A" ?
      <Link href={`/Products/${id}`} className=" w-[265px] h-[475.3800048828125px] flex flex-col border-[1px] border-[#ECECEC] rounded-[15px]">
        {/* Card container */}
        <div className="flex">
          {/* card tag */}
          <div className={`w-[60.22999954223633px] h-[31px] rounded-tl-[15px] rounded-br-[20px] flex justify-center items-center ${tag === "Hot" ? "bg-[#F74B81]" : tag === "Sale" ? "bg-[#67BCEE]" : tag === "New" ? "bg-[#3BB77E]" : tag === "-14%" ? "bg-[#F59758]" : ""}`} ><h1 className='text-white font-lato font-normal text-[12px] leading-[12px] align-middle'>{tag}</h1></div>
        </div>
        <div>
          {/* image */}
          <Image src={img} width={246} height={246} alt={title}></Image>
        </div>
        <div className="mx-5">
          {/* card middle content container */}
          <div>
            {/* category */}
            <p className="font-normal text-xs leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">{category}</p>
          </div>
          <div>
            {/* Title */}
            <p className="font-medium text-sm leading-6 align-middle tracking-[0.48px] text-[#2B2B2D] font-poppins">{title}</p>
          </div>
          <div className="flex items-center">
            {/* rating */}
            <div>
              {/* star */}
              <Image src={star} alt={star} width={57} height={12}></Image>
            </div>
            <div>
              {/* rating number */}
              <span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">({ratingnumber})</span>
            </div>
          </div>
          <div>
            {/* manufactored by */}
            <span className="flex gap-1 font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#B6B6B6]">By{manufacturer === "NestFood" && id === 1 ? (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#F53E32]">{manufacturer}</span>) : (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#3BB77E]">{manufacturer}</span>)}</span>
          </div>
          <div className="flex gap-[40px] mt-5 items-center">
            {/* price and button */}
            <div className="flex gap-[10.46px]">
              {/* price */}
              <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">{discountedprice}</span>
              <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">{originalprice}</span>
            </div>
            <div>
              {/* add button */}
              <ButtonUI buttontype={"A"} text={"Add"} onclick={(e) => { e.preventDefault(); e.stopPropagation() }} />
            </div>
          </div>
        </div>
      </Link> : cardtype === "B" ?
        <Link href={`/Products/${id}`} className="w-[225px] h-[100%] rounded-[15px] mb-4 flex flex-col border-[1px] border-[#ECECEC] ">
          {/* Card container */}
          <div className="flex">
            {/* card tag */}
            <div className={`w-[30%] h-[31px] rounded-tl-[15px] rounded-br-[20px] flex justify-center items-center ${tag === "Save 15%" ? "bg-[#F74B81]" : tag === "Sale" ? "bg-[#67BCEE]" : tag === "Save 35%" ? "bg-[#3BB77E]" : tag === "Best sale" ? "bg-[#F59758]" : ""}`} ><h1 className='text-white font-lato font-normal text-[12px] leading-[12px] align-middle'>{tag}</h1></div>
          </div>
          <div>
            {/* image */}
            <Image src={img} width={246} height={246} alt={title}></Image>
          </div>
          <div className="mx-5 flex flex-col gap-2 mb-4">
            {/* card middle details content container */}
            <div>
              {/* category */}
              <p className="font-normal text-xs leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">{category}</p>
            </div>
            <div>
              {/* Title */}
              <p className="font-medium text-sm leading-6 align-middle tracking-[0.48px] text-[#2B2B2D] font-poppins">{title}</p>
            </div>
            <div>
              {/* star */}
              <Image src={star} alt={star} width={57} height={12}></Image>
            </div>
            <div className="flex gap-[10.46px]">
              {/* price */}
              <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">{discountedprice}</span>
              <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">{originalprice}</span>
            </div>
            <div>
              {/* progress bar */}
              <progress className="bg-[#E9ECEF] w-full h-[5px] rounded-[4px] [&::-moz-progress-bar]:bg-[#F53E32]" value="50" max="100"> 32% </progress>
            </div>
            <div>
              {/* sold items value */}
              <span className="font-normal flex items-center text-xs leading-6 tracking-normal align-middle font-lato text-[#253D4E]">Sold: {solditemsvalue}</span>
            </div>
            <div>
              {/* add to cart button */}
              <ButtonUI buttontype={"A"} text={"Add To Cart"} onclick={(e) => { e.preventDefault(); e.stopPropagation() }} />
            </div>
          </div>
        </Link> : cardtype === "C" ?
          <Link href={`/Products/${id}`} className="w-[265px] h-[100%] flex flex-col rounded-[15px]">
            {/* Card container */}
            <div className="bg-cover bg-center w-[330.5px] h-[305.1700134277344px] flex  justify-center z-10 rounded-[15px]" style={{ backgroundImage: `url(${img}` }}>
              {/* Card back image */}
              <div className="w-[295.5px] h-[192.3800048828125px] gap-1 rounded-[10px] justify-center px-5 mt-50 flex flex-col shadow-[5px_5px_15px_0px_#0000000D] bg-[#FFFFFF] z-20 ">
                {/* card details box */}
                <div>
                  {/* title */}
                  <p className="font-bold w-full text-base leading-5 tracking-normal align-middle font-quicksand text-[#253D4E]">{title}</p>
                </div>
                <div className="flex items-center">
                  {/* rating */}
                  <div>
                    {/* star */}
                    <Image src={star} alt={star} width={57} height={12}></Image>
                  </div>
                  <div>
                    {/* rating number */}
                    <span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">({ratingnumber})</span>
                  </div>
                </div>
                <div>
                  {/* manufactored by */}
                  <span className="flex gap-1 font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#B6B6B6]">By{manufacturer === "NestFood" && id === 1 ? (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#F53E32]">{manufacturer}</span>) : (<span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#3BB77E]">{manufacturer}</span>)}</span>
                </div>
                <div className="flex gap-[40px] mt-5 items-center">
                  {/* price and button */}
                  <div className="flex gap-[10.46px]">
                    {/* price */}
                    <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">{discountedprice}</span>
                    <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">{originalprice}</span>
                  </div>
                  <div>
                    {/* add button */}
                    <ButtonUI buttontype={"A"} text={"Add"} onclick={(e) => { e.preventDefault(); e.stopPropagation() }} />
                  </div>
                </div>
              </div>
            </div>
          </Link> : cardtype === "D" ?
            <Link href={`/Products/${id}`} className="w-[100%] h-[100%] flex rounded-[15px] justify-center">
              {/* Card container */}
              <div className="size-[100px]">
                {/* image */}
                <Image src={img} alt={title} className="rounded-[15px]" width={110} height={110}></Image>
              </div>
              <div className="flex flex-col ml-5">
                {/* product card details */}
                <div>
                  {/* title */}
                  <p className="font-bold w-[234.4600067138672px] text-base leading-5 tracking-normal align-middle font-quicksand text-[#253D4E]">{title}</p>
                </div>
                <div className="flex items-center">
                  {/* rating */}
                  <div>
                    {/* star */}
                    <Image src={star} alt={star} width={57} height={12}></Image>
                  </div>
                  <div>
                    {/* rating number */}
                    <span className="font-normal text-sm leading-6 tracking-normal align-middle font-lato text-[#ADADAD]">({ratingnumber})</span>
                  </div>
                </div>
                                <div className="flex gap-[40px] mt-5 items-center">
                  {/* price and button */}
                  <div className="flex gap-[10.46px]">
                    {/* price */}
                    <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">{discountedprice}</span>
                    <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">{originalprice}</span>
                  </div>
                </div>
              </div>
            </Link> : ""}
    </>
  )
}

