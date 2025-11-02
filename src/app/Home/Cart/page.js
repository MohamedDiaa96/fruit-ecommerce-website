'use client'
import { productdata } from "@/app/components/data/ProductData";
import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI";
import ProductCardUI from "@/app/components/Ui/ProductCardUI";
import { CartContext } from "@/context/cartcontext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import PopularProductsBox from "./PopularProductsBox/PopularProductsBox";

export default function Cart() {

    const { cartitems, increasequantity, decreasequantity, removefromcart } = useContext(CartContext)
    return (
        <div >
            <OrangeBannerUI Title={"Cart"} currentpath={"Home / Cart"} />
            <div className="flex justify-center items-center h-[900px] flex-col min-sm:max-xl:w-[100%]">
                {/* cart container */}
                <div className="h-[672px] w-[1300px] flex flex-col bg-[#F7F7F8]  rounded-[5px] border-[1px] border-[#E9E9E9] overflow-y-scroll overflow-hidden min-sm:max-xl:w-[100%]">
                    {/* cart details: label and product details */}
                    <div className="flex items-center border-[1px] border-[#E9E9E9] bg-[#E9E9E9] py-4 h-[46px] min-sm:max-xl:pl-8">
                        {/* labels */}
                        <div className="w-[518px] pl-4">
                            {/* Product label */}
                            <h1 className="font-[Segoe_UI] text-[#444444] font-semibold text-[15px] leading-[15px] tracking-[0%] align-middle capitalize">Product</h1>
                        </div>
                        <div className="w-[201.63999938964844px]">
                            {/* price label */}
                            <h1 className="font-[Segoe_UI] text-[#444444] font-semibold text-[15px] leading-[15px] tracking-[0%] align-middle capitalize">Price</h1>

                        </div>
                        <div className="w-[283.69000244140625px]">
                            {/* Quantity label */}
                            <h1 className="font-[Segoe_UI] text-[#444444] font-semibold text-[15px] leading-[15px] tracking-[0%] align-middle capitalize">Quantity</h1>

                        </div>
                        <div className="w-[201.6699981689453px]">
                            {/* Total label */}
                            <h1 className="font-[Segoe_UI] text-[#444444] font-semibold text-[15px] leading-[15px] tracking-[0%] align-middle capitalize">Total</h1>

                        </div>
                        <div className="w-[90px]">
                            {/* Action label */}
                            <h1 className="font-[Segoe_UI] text-[#444444] font-semibold text-[15px] leading-[15px] tracking-[0%] align-middle capitalize">Action</h1>

                        </div>
                    </div>
                    <div className="flex flex-col ">
                        {/* cart product details */}
                        {cartitems.length === 0 ? (
                            <p className="text-center text-gray-500 py-10">Your cart is empty 🛍️</p>
                        ) : (cartitems.map((item) => (<section className="m-4 mt-7 flex items-center" key={item.id}>
                            {/* cart product item details container */}
                            <div className="flex items-center gap-[20px] w-[495px] min-sm:max-xl:mx-5">
                                {/* image and title */}
                                <Image src={item.img} width={60} height={60} alt={item.title} className="rounded-[5px] border-[1px] border-[#E9E9E9]"></Image>
                                <h1 className=" font-[Segoe_UI] font-normal text-[14px] leading-[21px] tracking-[0.6px] align-middle text-[#444444]">{item.title}</h1>
                            </div>
                            <div className="min-sm:max-xl:mx-5">
                                {/* cart price */}
                                <h1 className="font-[Segoe_UI] font-normal text-[15px] leading-[22.5px] tracking-[0.48px] align-middle text-[#555555]">${item.discountedprice}</h1>
                            </div>
                            <div className="w-[231.63999938964844px] flex justify-end min-sm:max-xl:mx-5">
                                {/* quantity multipiler and minimizer */}
                                <div className="w-[80px] h-[30px] cursor-pointer flex items-center justify-between px-1 rounded-[5px] border-[1px] border-[#E9E9E9]">
                                    {/* quantity adjuster button */}
                                    <button onClick={() => increasequantity(item.id)} className="active:bg-[#00000051] overflow-hidden content-center font-[Segoe_UI] h-full w-5  cursor-pointer font-normal text-[16px] leading-[24px] tracking-[0%] text-center align-middle text-black">+</button>
                                    <span className="font-[Segoe_UI] font-semibold text-[14px] leading-[38px] tracking-[0%] text-center align-middle text-[#444444]">{item.quantity}</span>
                                    <button onClick={() => { decreasequantity(item.id) }} className="font-[Segoe_UI] active:bg-[#00000051] overflow-hidden content-center  h-full w-5  cursor-pointer font-normal text-[16px] leading-[24px] tracking-[0%] text-center align-middle text-black">-</button>
                                </div>
                            </div>
                            <div className="w-[246.6699981689453px] flex justify-end">
                                {/* total price */}
                                <h1 className="font-[Segoe_UI] font-normal text-[15px] leading-[22.5px] tracking-[0.48px] align-middle text-[#555555]">${(item.discountedprice * item.quantity).toFixed(2)}</h1>
                            </div>
                            <div className="w-[180px] flex justify-end">
                                {/* remove cart item */}
                                <button onClick={() => { removefromcart(item.id) }}><Image src={"/material-photos/Cart/trashicon.svg"} width={18} height={18} alt={item.title} className="cursor-pointer"></Image></button>
                            </div>
                        </section>)))}


                    </div>
                </div>
                <div className="w-full h-20 flex justify-between items-center px-27 ">
                    {/* Link and checkout button */}
                    <Link href="/Products" className="text-[#444444] font-[Segoe_UI] font-normal text-[15px] leading-[20px] tracking-[0.8px] align-middle underline [text-decoration-style:solid]">Continue Shopping</Link>
                    <Link href="/Checkout" className="relative group overflow-hidden bg-[#F53E32] rounded-[5px] flex items-center justify-center w-[120.33999633789062px] h-[40px] font-manrope font-bold text-[14px] leading-[16.8px] tracking-[0.48px] align-bottom capitalize text-[#FFFFFF]">
                        <div className="absolute size-full  group-hover:bg-[#00000060]"></div>
                        <div className="absolute z-20 text-white ">Checkout</div>
                    </Link>
                </div>
            </div>
            <PopularProductsBox></PopularProductsBox>
        </div>
    )
}