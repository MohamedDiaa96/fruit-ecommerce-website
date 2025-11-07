'use client'
import { productdata } from '@/app/components/data/ProductData'
import ButtonUI from "@/app/components/Ui/ButtonUI"
import FilterUI from "@/app/components/Ui/FilterUI"
import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI"
import MySlider from "@/app/components/Ui/SwiperUI"
import PopularProductsBox from "@/app/Home/Cart/PopularProductsBox/PopularProductsBox"
import { CartContext } from "@/context/cartcontext"
import Image from "next/image"
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { SwiperSlide } from "swiper/react"

export default function Productdetails() {
  const { productdetails } = useParams()
  const product = productdata.find((item) => item.id == productdetails)
  console.log(productdetails)

  const [imagepicker, setimagepicker] = useState(product?.imglist[0])
  const [weightpicker, setweightpicker] = useState(product?.weightlist[0])
  const { cartitems, addtocart, increasequantity, decreasequantity, removefromcart } = useContext(CartContext)
  const inCart = cartitems.find((item) => item.id === product.id)
  const [infoboxtext, setinfoboxtext] = useState("Description")

  const reviews = [
    {
      name: "Youssef Adel",
      img: "https://randomuser.me/api/portraits/men/19.jpg",
      text: "The watermelon was so fresh! Reminded me of summer days 😎🍉",
      rating: 5,
    },
    {
      name: "Nour El-Din",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Nice quality overall, but I wish there were more organic options.",
      rating: 4,
    },
    {
      name: "Hana Tarek",
      img: "https://randomuser.me/api/portraits/women/27.jpg",
      text: "Loved how everything was neatly packed and arrived cold! 🧊",
      rating: 5,
    },
    {
      name: "Laila Samir",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      text: "Apples were crisp and tasty, but the bananas were a bit soft.",
      rating: 3,
    },
  ];
  return (
    <main >
      {/* product details container */}
      <OrangeBannerUI Title={"Product"} currentpath={"Home - product"} />
      <section className="flex  ">
        <div className="py-[100px] px-20 flex gap-6 sm:max-xl:hidden ">
          {/* filterUI */}
          <div className="w-[35%]"><FilterUI></FilterUI></div>
        </div>
        <div className="flex flex-col sm:max-xl:flex-col sm:max-xl:w-full sm:max-xl:items-center sm:max-xl:flex-wrap ">
          {/* product details container */}
          <div className="flex sm:max-xl:flex-col">
            {/* product image and text container */}
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
            <div className="pt-[100px] sm:max-xl:mx-50  sm:max-xl:pt-5 pl-1.5 sm:max-xl:w-full sm:max-xl:items-center sm:max-xl:justify-center  ">
              {/* product text container */}
              <div className="gap-[17px] flex flex-col  [border-bottom:1px_solid_#E9E9E9] w-[471px] h-[118px] opacity-100  ">
                {/* title box */}
                <h1 className="font-[Segoe_UI] font-normal text-[22px] leading-[33px] tracking-[0.48px] align-middle text-[#2B2B2D]">{product.title}</h1>
                <p className="w-[466.9800109863281px] font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[24.5px] tracking-[0.48px] align-middle">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
              </div>
              <div className="flex gap-2.5 py-6  items-center">
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
              <div className="flex flex-col gap-2.5 ">
                {/* info text box */}
                <div className="flex items-center  " >
                  {/* text */}
                  <span className="font-[Segoe_UI]  w-[22%] justify-between font-semibold text-[16px] text-[#2B2B2D] leading-6 tracking-[0.48px] align-middle">Brand</span>
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
              <div className="flex gap-2.5 -600 py-8">
                {/* Price box */}
                <h2 className="font-poppins font-semibold text-[#F53E32] text-[24px] leading-[28.01px] tracking-[0.48px] align-middle">${product.discountedprice}</h2>
                <h2 className="font-poppins font-normal text-[16px] leading-7 text-[#7A7A7A] tracking-[0.48px] align-middle line-through">${product.originalprice}</h2>
              </div>
              <div className="flex gap-2">
                {/* weight options */}
                <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[24.9px] tracking-[0.48px] align-middle">Size/Weight :</h1>
                {product.weightlist.map((w, index) => (<button key={index} onClick={() => { setweightpicker(w) }} className={`${w === weightpicker ? "flex items-center cursor-pointer justify-center w-[53.29999923706055px] h-6 opacity-100 rounded-[5px] border border-solid border-[#F53E32] bg-[#F53E32]" : "flex cursor-pointer items-center justify-center w-[53.29999923706055px] h-6 opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] bg-white hover:border-[#F53E32] hover:bg-[#F53E32] group"}  `}><span className={`${w === weightpicker ? "font-poppins font-normal text-white content-center text-[12px] leading-3 w-[31.689374923706055px] h-[17px] tracking-[0.48px] align-middle" : "font-poppins font-normal group-hover:text-white text-[#777777] content-center text-[12px] leading-3 w-[31.689374923706055px] h-[17px] tracking-[0.48px] align-middle"}`}>{w}</span></button>))}
              </div>
              <div className="flex py-6 gap-2">
                {/* cart item quantity box */}

                {inCart ? (
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <button
                        className="w-[18px] h-[18px] cursor-pointer active:bg-[#00000062] bg-white rounded-[5px] flex items-center justify-center border border-solid border-[#E9E9E9]"
                        onClick={() => increasequantity(product.id)}
                      >
                        +
                      </button>
                      <button
                        className="w-[18px] active:bg-[#00000062] h-[18px] cursor-pointer bg-white rounded-[5px] flex items-center justify-center border border-solid border-[#E9E9E9]"
                        onClick={() => decreasequantity(product.id)}
                      >
                        -
                      </button>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-[5px] border bg-[#FFFFFF] border-solid border-[#E9E9E9]">
                      <span className="font-semibold">{inCart.quantity}</span>
                    </div>
                    <button
                      className="group relative flex items-center justify-center overflow-hidden ml-2 font-manrope cursor-pointer text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize w-[125.08px] h-10 bg-[#F53E32] border border-solid border-[#F53E32] rounded-[5px]"
                      onClick={() => removefromcart(product.id)}
                    >
                      <div className="absolute inset-0 group-hover:bg-black/30 group-hover:border-black"></div>
                      <div className="absolute z-20">Remove</div>

                    </button>
                  </div>
                ) : (
                  <button
                    className="group relative flex items-center justify-center overflow-hidden ml-2 font-manrope cursor-pointer text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize w-[125.08px] h-10 bg-[#F53E32] border border-solid border-[#F53E32] rounded-[5px]"
                    onClick={() => addtocart(product)}
                  >
                    <div className="absolute inset-0 group-hover:bg-black/30 group-hover:border-black/30"></div>
                    <div className="absolute z-20">Add To Cart</div>
                  </button>
                )}
                <button className="group w-10 h-10 opacity-100 cursor-pointer flex justify-center items-center rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-red-600 " d="M9.23162 1.40256C9.94559 0.762445 10.7642 0.340834 11.6874 0.13772C12.6107 -0.0653915 13.5216 -0.0438499 14.4202 0.202347C15.3558 0.460854 16.1651 0.931705 16.8483 1.6149C17.5315 2.2981 18.0024 3.10747 18.2609 4.04302C18.5071 4.94163 18.5286 5.84949 18.3255 6.76657C18.1224 7.68365 17.7008 8.50533 17.0607 9.23161L9.23162 17.0607L1.40256 9.23161C0.762451 8.50533 0.340839 7.68365 0.137727 6.76657C-0.0653855 5.84949 -0.0438432 4.94163 0.202353 4.04302C0.46086 3.10747 0.934789 2.2981 1.62414 1.6149C2.31349 0.931705 3.11978 0.460854 4.04302 0.202347C4.94164 -0.0438499 5.85257 -0.0653915 6.77581 0.13772C7.69904 0.340834 8.51765 0.762445 9.23162 1.40256ZM15.5281 2.91667C15.0726 2.4612 14.5433 2.15038 13.9401 1.9842C13.3369 1.81801 12.7276 1.80263 12.1121 1.93803C11.4966 2.07344 10.9488 2.35657 10.4688 2.78741L9.23162 3.8953L7.99448 2.78741C7.52671 2.35657 6.982 2.07344 6.36035 1.93803C5.7387 1.80263 5.12629 1.81801 4.52311 1.9842C3.91992 2.15038 3.3906 2.4612 2.93514 2.91667C2.47967 3.37213 2.16577 3.90145 1.99343 4.50464C1.8211 5.10782 1.79955 5.71408 1.92881 6.32341C2.05806 6.93275 2.33196 7.47746 2.75049 7.95754L9.23162 14.4571L15.7127 7.95754C16.1313 7.47746 16.4052 6.93275 16.5344 6.32341C16.6637 5.71408 16.6421 5.10782 16.4698 4.50464C16.2975 3.90145 15.9836 3.37213 15.5281 2.91667Z" fill="black" />
                  </svg>
                </button>
                <button className="group w-10 h-10 opacity-100  cursor-pointer flex justify-center items-center  rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:fill-orange-600 " d="M9.98943 5.72205e-06C11.6143 5.72205e-06 13.1531 0.369301 14.6056 1.10789C15.9966 1.82186 17.1691 2.80973 18.1232 4.07148C19.0772 5.33324 19.6957 6.7458 19.9789 8.30915C19.6957 9.8725 19.0772 11.285 18.1232 12.5468C17.1691 13.8086 15.9966 14.7964 14.6056 15.5104C13.1531 16.249 11.6143 16.6183 9.98943 16.6183C8.36453 16.6183 6.8258 16.249 5.37324 15.5104C3.98223 14.7964 2.80972 13.8086 1.85571 12.5468C0.901696 11.285 0.283126 9.8725 0 8.30915C0.283126 6.7458 0.901696 5.33324 1.85571 4.07148C2.80972 2.80973 3.98223 1.82186 5.37324 1.10789C6.8258 0.369301 8.36453 5.72205e-06 9.98943 5.72205e-06ZM9.98943 14.7718C11.2697 14.7718 12.4883 14.4887 13.6455 13.9224C14.7656 13.3808 15.7166 12.6176 16.4983 11.6328C17.2799 10.648 17.8123 9.54013 18.0955 8.30915C17.8123 7.07816 17.2799 5.97028 16.4983 4.98549C15.7166 4.0007 14.7656 3.23749 13.6455 2.69586C12.4883 2.12961 11.2697 1.84648 9.98943 1.84648C8.70921 1.84648 7.49054 2.12961 6.33341 2.69586C5.21322 3.23749 4.26228 4.0007 3.48061 4.98549C2.69893 5.97028 2.16653 7.07816 1.88341 8.30915C2.16653 9.54013 2.69893 10.648 3.48061 11.6328C4.26228 12.6176 5.21322 13.3808 6.33341 13.9224C7.49054 14.4887 8.70921 14.7718 9.98943 14.7718ZM9.98943 12.4637C9.23853 12.4637 8.5461 12.276 7.91215 11.9005C7.27819 11.5251 6.77349 11.0204 6.39804 10.3864C6.02259 9.75247 5.83486 9.06005 5.83486 8.30915C5.83486 7.55825 6.02259 6.86582 6.39804 6.23186C6.77349 5.59791 7.27819 5.0932 7.91215 4.71775C8.5461 4.3423 9.23853 4.15458 9.98943 4.15458C10.7403 4.15458 11.4328 4.3423 12.0667 4.71775C12.7007 5.0932 13.2054 5.59791 13.5808 6.23186C13.9563 6.86582 14.144 7.55825 14.144 8.30915C14.144 9.06005 13.9563 9.75247 13.5808 10.3864C13.2054 11.0204 12.7007 11.5251 12.0667 11.9005C11.4328 12.276 10.7403 12.4637 9.98943 12.4637ZM9.98943 10.6172C10.408 10.6172 10.7926 10.5126 11.1435 10.3033C11.4943 10.0941 11.7744 9.81402 11.9836 9.46319C12.1929 9.11236 12.2975 8.72768 12.2975 8.30915C12.2975 7.89061 12.1929 7.50593 11.9836 7.1551C11.7744 6.80427 11.4943 6.52422 11.1435 6.31495C10.7926 6.10569 10.408 6.00105 9.98943 6.00105C9.5709 6.00105 9.18622 6.10569 8.83539 6.31495C8.48456 6.52422 8.20451 6.80427 7.99524 7.1551C7.78597 7.50593 7.68134 7.89061 7.68134 8.30915C7.68134 8.72768 7.78597 9.11236 7.99524 9.46319C8.20451 9.81402 8.48456 10.0941 8.83539 10.3033C9.18622 10.5126 9.5709 10.6172 9.98943 10.6172Z" fill="black" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
          <div className="sm:max-xl:w-full sm:max-xl:flex sm:max-xl:justify-center">
            {/* product info & desc container */}
            <div className="sm:max-xl:w-[90%] w-[966px] h-[432.5px] opacity-100 bg-white  border-solid border-[#E9E9E9] rounded-[5px] border ">
              {/* product info & desc box */}
              <div className={` sm:max-xl:w-[90%] sm:max-xl:px-20 sm:max-xl:justify-between flex gap-[30px] items-center w-[916px] h-[51.5px] opacity-100  [border-bottom:1px_solid_#DEE2E6] mx-7`}>
                {/* product info titles */}
                <button onClick={() => { setinfoboxtext("Description") }} className={`${infoboxtext === "Description" ? "after:content-[''] after:block after:absolute after:mt-[11px] after:w-[100px] after:h-0.5 after:bg-[#64B496] cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#F53E32] " : "   cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#2B2B2D]"}`}>Description</button>
                <button onClick={() => { setinfoboxtext("Information") }} className={`${infoboxtext === "Information" ? "after:content-[''] after:block after:absolute after:mt-[11px] after:w-[100px] after:h-0.5 after:bg-[#64B496] cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#F53E32]   " : "   cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#2B2B2D]"}`}>Information</button>
                <button onClick={() => { setinfoboxtext("Review") }} className={`${infoboxtext === "Review" ? "after:content-[''] after:block after:absolute after:mt-[11px] after:w-[60px] after:h-0.5 after:bg-[#64B496] cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#F53E32] " : "   cursor-pointer font-poppins font-semibold text-[17px] leading-[25.5px] tracking-[0%] align-middle text-[#2B2B2D]"}`}>Review</button>

              </div>

              {/* product info text */}
              {infoboxtext === "Description" ?
                <>
                  <div className="flex flex-col gap-4 sm:max-xl:overflow-y-auto max-h-[300px] p-4">
                    <div className="flex ml-7 py-5">
                      <p className="w-[914.5px]  font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus
                        consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdebitis corporis, eaque dicta,
                        repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio,
                        error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis
                        provident quis.</p>
                    </div>
                    <div className="mx-7 flex items-center w-[916px] h-[75px] opacity-100 top-[229px] left-[25px] border-b [border-bottom:1px_solid_#E9E9E9]">
                      <h1 className="font-poppins font-medium text-[16px] leading-6 tracking-[0.48px] align-middle text-[#2B2B2D]">Packaging & Delivery</h1>
                    </div>
                    <div className="flex ml-7 py-5">
                      <p className="w-[891.1400146484375px]  font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequuntur repellat
                        distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos
                        consectetur quae vero in perferendis provident quis.</p>
                    </div>
                  </div>
                </>
                : infoboxtext === "Information" ?
                  <>
                    <div className="flex flex-col gap-4 sm:max-xl:overflow-y-auto max-h-[300px] p-4">
                      <div className="flex ml-7 py-5 flex-col">
                        <p className="  font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus
                          consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdebitis corporis, eaque dicta,
                          repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio,
                          error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis
                          provident quis.</p>
                        <ul className="list-disc list-inside flex flex-col my-5 gap-2">
                          <li>Fresh organic fruits delivered daily</li>
                          <li>100% natural and pesticide-free</li>
                          <li>Free shipping on orders over $50</li>
                          <li>Seasonal discounts and special bundles</li>
                          <li>Locally sourced from trusted farms</li>
                          <li>Fast and eco-friendly packaging</li>
                          <li>Join our loyalty program for rewards</li>
                        </ul>

                      </div>
                    </div>
                    F</> : infoboxtext === "Review" ?
                    <>
                      <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] p-4">
                        <div className="flex flex-col gap-4">
                          {reviews.map((r, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md max-w-md"
                            >
                              <div className="w-16 h-16 rounded-full overflow-hidden">
                                <img
                                  src={r.img}
                                  alt={r.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg text-gray-800">{r.name}</h3>
                                <p className="text-sm text-gray-600 italic">“{r.text}”</p>
                                <div className="flex mt-2">
                                  {[...Array(5)].map((_, idx) => (
                                    <span
                                      key={idx}
                                      className={`text-lg ${idx < r.rating ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                    >
                                      ★
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>


                    : ""}


            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <PopularProductsBox></PopularProductsBox>
      </section>
    </main>
  )
}

