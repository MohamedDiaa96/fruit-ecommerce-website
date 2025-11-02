'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { productdata } from '../data/ProductData'
import ButtonUI from "./ButtonUI"
import { CartContext } from "@/context/cartcontext"

export default function ProductCardUI({ cardtype, id, tag, img, category, title, star, ratingnumber, manufacturer, discountedprice, originalprice, solditemsvalue, cartbag, bronzestars }) {
  const { addtocart } = useContext(CartContext)

const handleaddtocart = ()=>{
  addtocart({id,img,title,discountedprice})
}

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
              <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">${discountedprice}</span>
              <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">${originalprice}</span>
            </div>
            <div>
              {/* add button */}
              <ButtonUI buttontype={"A"} text={"Add"} onclick={(e) => { e.preventDefault(); e.stopPropagation(); handleaddtocart() }} />
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
              <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">${discountedprice}</span>
              <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">${originalprice}</span>
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
                    <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">${discountedprice}</span>
                    <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">${originalprice}</span>
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
                    <span className="font-bold text-lg leading-6 tracking-normal align-middle font-quicksand text-[#3BB77E]">${discountedprice}</span>
                    <span className="font-bold text-sm leading-6 tracking-normal align-middle line-through font-quicksand text-[#ADADAD]">${originalprice}</span>
                  </div>
                </div>
              </div>
            </Link> : cardtype === "E" ?
              <Link href={`/Products/${id}`} className="my-10 w-[306px] h-[477px] items-center bg-[#FFFFFF] flex flex-col border-[1px] border-[#E9E9E9] rounded-[5px]">
                {/* Card container */}
                <div className="w-[280px] h-[280px] border my-[13px] border-[#E9E9E9] rounded-[5px]">
                  {/* image container */}
                  <Image src={img} width={278} height={278} alt={title}></Image>
                  <div className="flex justify-center border-[#E9E9E9]  z-10 ">
                    {/* cart bag circle box container */}
                    <button className="cursor-pointer z-10 group hover:bg-[#88d692] transition-all duration-300 flex justify-center w-10 h-10 border my-[-20px] bg-[#F7F7F8] border-[#E9E9E9] items-center rounded-4xl" onClick={(e) => { e.preventDefault(); e.stopPropagation() }}>
                      {/* cart bag circle box */}
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-[#64B496] group-hover:fill-white z-20 transition-all duration-300" d="M2.66667 4.66667V3.33333C2.66667 2.72889 2.81556 2.17111 3.11333 1.66C3.41111 1.14889 3.81556 0.744444 4.32667 0.446667C4.83778 0.148889 5.39556 0 6 0C6.60444 0 7.16222 0.148889 7.67333 0.446667C8.18444 0.744444 8.58889 1.14889 8.88667 1.66C9.18444 2.17111 9.33333 2.72889 9.33333 3.33333V4.66667H11.3333C11.52 4.66667 11.6778 4.73111 11.8067 4.86C11.9356 4.98889 12 5.14667 12 5.33333V13.3333C12 13.52 11.9356 13.6778 11.8067 13.8067C11.6778 13.9356 11.52 14 11.3333 14H0.666667C0.48 14 0.322222 13.9356 0.193333 13.8067C0.0644444 13.6778 0 13.52 0 13.3333V5.33333C0 5.14667 0.0644444 4.98889 0.193333 4.86C0.322222 4.73111 0.48 4.66667 0.666667 4.66667H2.66667ZM2.66667 6H1.33333V12.6667H10.6667V6H9.33333V7.33333H8V6H4V7.33333H2.66667V6ZM4 4.66667H8V3.33333C8 2.96889 7.91111 2.63333 7.73333 2.32667C7.55556 2.02 7.31333 1.77778 7.00667 1.6C6.7 1.42222 6.36444 1.33333 6 1.33333C5.63556 1.33333 5.3 1.42222 4.99333 1.6C4.68667 1.77778 4.44444 2.02 4.26667 2.32667C4.08889 2.63333 4 2.96889 4 3.33333V4.66667Z" fill="#F53E32" />
                      </svg>
                    </button>
                  </div>
                  <section className="my-7 gap-2 flex flex-col">
                    {/* product card details */}
                    <div className="flex justify-center">
                      {/* category */}
                      <p className="font-[Segoe_UI] font-normal text-[#777777] text-[13px] leading-[19.5px] tracking-[0.48px] text-center align-middle">{category}</p>
                    </div>
                    <div className="flex w-full justify-center items-center gap-[6px]">
                      {/* rating */}
                      <div className="flex gap-[2px]">
                        {/* bronzestars */}
                        {bronzestars.map((bronzestar, index) => (<Image key={index} src={bronzestar} width={14} height={13} alt={bronzestar}></Image>))}
                      </div>

                      <div>
                        {/* rating number */}
                        <span className="font-poppins text-[#999999] font-normal text-[11px] leading-[10px] tracking-[0.48px] text-center align-middle">({ratingnumber})</span>
                      </div>
                    </div>
                    <div>
                      {/* title */}
                      <h1 className="font-poppins text-[#2B2B2D] font-medium text-[15px] leading-[24px] tracking-[0.48px] text-center align-middle">{title}</h1>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      {/* prices */}
                      <span className="font-poppins font-bold text-[16px] leading-[28px] tracking-[0.48px] text-center align-middle text-[#F53E32]">${discountedprice}</span>
                      <span className="font-poppins font-normal text-[13px] leading-[22.75px] tracking-[0.48px] text-center align-middle line-through text-[#7A7A7A]">${originalprice}</span>

                    </div>
                  </section>
                  <div>

                  </div>
                </div>
              </Link> : ""}
    </>
  )
}

