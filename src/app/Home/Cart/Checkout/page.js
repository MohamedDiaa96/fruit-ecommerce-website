'use client'
import ButtonUI from "@/app/components/Ui/ButtonUI";
import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI";
import { CartContext } from "@/context/cartcontext";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Checkout() {

    const [subtotal, setsubtotal] = useState(80.00)
    const [total, settotal] = useState(0)
    const [flatrate, setflatrate] = useState(0)
    const [flatrateradio, setflatrateradio] = useState(false)
    const { cartitems } = useContext(CartContext)

    const productpriceaddition = cartitems.reduce(
        (total, item) => total + (Number(item.discountedprice) * Number(item.quantity || 1)), 0)

    const [payment, setpayment] = useState("cash")
    const [account, setaccount] = useState("register")
    const [bill, setbill] = useState("oldaddress")
    return (
        <main>
            <OrangeBannerUI Title={"Checkout"} currentpath={"Home - Checkout"} />
            <section className="flex sm:max-xl:w-full sm:max-xl:flex-col sm:max-xl:items-center">
                {/* left and right boxes container */}
                <div className="w-[400px]  h-[1245px] m-10 mx-10 gap-[30px] flex flex-col sm:max-xl:w-full sm:max-xl:items-center">
                    {/* left box container */}
                    <div className="w-[416px] h-[484px]  opacity-100 rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                        {/* Summary box */}
                        <div className="flex flex-col gap-4.5 m-5 w-[90%]  ">
                            {/* inner Summary box  */}
                            <div >
                                {/* Summary title */}
                                <h1 className="font-[Segoe_UI] font-semibold text-[20px] leading-6 tracking-[0%] align-middle text-black">Summary</h1>
                            </div>
                            <div className=" flex justify-between">
                                {/* summary sub-total charges  */}
                                <span className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">Sub-Total</span>
                                <span className="font-[Segoe_UI] font-normal text-[15px] leading-6 tracking-[0.48px] align-middle text-black">${(subtotal).toFixed(2)}</span>
                            </div>
                            <div className=" my-[-5px]  flex justify-between">
                                {/* summary Delivery charges  */}
                                <span className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">Delivery Charges</span>
                                <span className="font-[Segoe_UI] font-normal text-[15px] leading-6 tracking-[0.48px] align-middle text-black">$80.00</span>
                            </div>
                            <div className={` ${flatrate === 5 ? " flex justify-between" : flatrate === 0 ? "hidden  justify-between" : ""}  `}>
                                {/* Flat Rate charges  */}
                                <span className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">+ Flat Rate</span>
                                <span className="font-[Segoe_UI] font-normal text-[15px] leading-6 tracking-[0.48px] align-middle text-black">${(flatrate).toFixed(2)}</span>
                            </div>
                            <div className="flex py-8 h-11 items-center [border-top:1px_solid_#E9E9E9] justify-between">
                                {/* Total Amount Container */}
                                <h1 className="font-manrope font-semibold text-[16px] leading-6 tracking-[0%]  align-middle text-[#2B2B2D]">Total Amount</h1>
                                <span className="font-manrope font-semibold text-[16px] leading-6 tracking-[0.48px] align-middle text-[#000000]"> ${(
                                    Number(total) +
                                    Number(subtotal) +
                                    Number(flatrate) +
                                    Number(productpriceaddition)
                                ).toFixed(2)}</span>
                            </div>
                            <div className="flex flex-col h-50 gap-5 overflow-y-auto over">
                                {/* checkedout items container  */}

                                {cartitems.map((item) => (<div key={item.id} className="flex h-full gap-[15px] ">
                                    {/* image container */}
                                    <Image src={item.img} width={80} height={80} alt={item.title}></Image>
                                    <div className="flex flex-col gap-[11px]">
                                        {/* title, rating stars and price container */}
                                        <span className="font-[Segoe_UI] font-normal text-[15px] leading-[18px] tracking-[0.48px] align-middle text-black">{item.title}</span>
                                        <div className="flex gap-[3.38px]">
                                            {/* bronzestars container */}
                                            {item.bronzestars.map((star, index) => (<Image key={index} src={star} width={13} height={12} alt="star"></Image>
                                            ))}</div>
                                        <div className="flex gap-1 items-center">
                                            <span className="font-poppins font-bold text-[16px] leading-7 tracking-[0.48px] align-middle text-[#64B496]">${item.discountedprice}</span>
                                            <span className="font-poppins font-normal text-[13px] leading-[22.75px] tracking-[0.48px] align-middle line-through text-[#7A7A7A]">${item.originalprice}</span>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-[416px] h-[347px]  opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] bg-[#FFFFFF]">
                        {/* delivery method box */}
                        <div className="flex flex-col gap-4.5 m-5 w-[90%]  ">
                            {/* inner delivery method box  */}
                            <div >
                                {/* delivery method title */}
                                <h1 className="font-[Segoe_UI] font-semibold text-[20px] leading-6 tracking-[0%] align-middle text-black">Delivery Method</h1>
                            </div>
                            <div>
                                {/* delivery method text */}
                                <p className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">Please select the preferred shipping method to use on this
                                    order.</p>
                            </div>
                            <div className="flex gap-[99px]">
                                {/* delivery method - free shipping and flat rate  */}
                                <div className="flex flex-col gap-3">
                                    {/* delivery method - free shipping */}
                                    <span className="font-lato font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#2B2B2D]">Free Shipping</span>
                                    <div className="flex w-full gap-2 items-center">
                                        {/* free shipping text and radio input */}
                                        <input id="ship" type="radio" checked={flatrateradio === false} onChange={() => { setflatrate(0); setflatrateradio(false) }} className="accent-[#F53E32]"></input>
                                        <label htmlFor="ship" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Rate - $0.00</label>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {/* delivery method - flat rate */}
                                    <span className="font-lato font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#2B2B2D]">Flat Rate</span>
                                    <div className="flex w-full gap-2 items-center">
                                        {/* flat rate text and radio input */}
                                        <input id="flat" type="radio" checked={flatrateradio === true} onChange={() => { setflatrate(5); setflatrateradio(true) }} className="accent-[#F53E32]"></input>
                                        <label htmlFor="flat" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Rate - $5.00</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 py-4">
                                {/* delivery method - comment title and comment box */}
                                <div>
                                    {/* delivert method - Add Comments About Your Order title */}
                                    <h1 className="font-poppins font-normal text-[14.88px] leading-[15px] tracking-[0%] align-middle text-[#2B2B2D]">Add Comments About Your Order</h1>
                                </div>
                                <textarea className="w-[384px] h-[100px] top-[211px] resize-none opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] accent-[#F53E32]">

                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="w-[416px] h-[227px] top-[801px]  opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] bg-[#FFFFFF]">
                        {/* Payment Method box  */}
                        <div className="flex flex-col gap-4.5 m-5 w-[90%]  ">
                            {/* inner payment method box */}
                            <div>
                                {/* payment method - title */}
                                <h1 className="font-[Segoe_UI] text-black font-semibold text-[20px] leading-6 tracking-[0%] align-middle">Payment Method</h1>
                            </div>
                            <div>
                                {/* payment method text */}
                                <p className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">Please select the preferred shipping method to use on this
                                    order.</p>
                            </div>
                            <div className="flex flex-col gap-[15px]">
                                {/* cash on delivery,UPI and bank transfer radio button and text */}
                                <div className="flex w-full gap-2 items-center">
                                    {/* cash on delivery text and radio input */}
                                    <input id="cash" type="radio" checked={payment === "cash"} onChange={() => { setpayment("cash") }} className="accent-[#F53E32]"></input>
                                    <label htmlFor="cash" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Cash On Delivery</label>
                                </div>
                                <div className="flex w-full gap-2 items-center">
                                    {/* UPI text and radio input */}
                                    <input id="upi" type="radio" checked={payment === "upi"} onChange={() => { setpayment("upi") }} className="accent-[#F53E32]"></input>
                                    <label htmlFor="upi" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">UPI</label>
                                </div>
                                <div className="flex w-full gap-2 items-center">
                                    {/* bank transfer text and radio input */}
                                    <input id="bank" type="radio" checked={payment === "bank"} onChange={() => { setpayment("bank") }} className="accent-[#F53E32]"></input>
                                    <label htmlFor="bank" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Bank Transfer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[416px] h-[101px] top-[801px]  opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] bg-[#FFFFFF]">
                        {/* Payment Method box  */}
                        <div className="flex flex-col gap-4.5 m-5 w-[90%]  ">
                            {/* inner payment method box */}
                            <div>
                                {/* payment method - title */}
                                <h1 className="font-[Segoe_UI] text-black font-semibold text-[20px] leading-6 tracking-[0%] align-middle">Payment Method</h1>
                            </div>
                            <div>
                                {/* payment method - banner image */}
                                <Image src={"/material-photos/Cart/checkout/payment.svg"} width={335} height={30} alt="payment"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10 mr-10 gap-[30px] flex flex-col sm:max-xl:w-full sm:max-xl:items-center">
                    {/* right box container */}
                    <div className="w-[856px] h-[589px]  opacity-100 rounded-[5px] bg-[#FFFFFF] border border-solid border-[#E9E9E9]  flex flex-col sm:max-xl:items-center sm:max-xl:w-[90%] ">
                        {/* new customer box */}
                        <div className="flex flex-col gap-3.5 m-5 w-[90%]  ">
                            {/* inner new customer box */}
                            <div className="w-1">
                                {/* new customer title */}
                                <h1 className="font-montserrat font-semibold text-[20px] leading-5 tracking-[0%] align-middle text-[#2B2B2D]">New Customer</h1>
                            </div>
                            <div>
                                {/* new customer - checkout options text */}
                                <span className="font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#2B2B2D]">Checkout Options</span>
                            </div>
                            <div className="flex gap-[49px]">
                                {/* new customer - checkout options text and radio buttons container */}
                                <div className="flex items-center gap-2">
                                    {/* new customer - checkout options text and radio */}
                                    <input type="radio" id="account" checked={account === "register"} onChange={() => { setaccount("register") }} className="accent-[#64B496]"></input>
                                    <label htmlFor="account" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Register Account</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* new customer - checkout options text and radio */}
                                    <input type="radio" id="guest" checked={account === "guest"} onChange={() => { setaccount("guest") }} className="accent-[#64B496]"></input>
                                    <label htmlFor="guest" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">Guest Account</label>
                                </div>
                            </div>
                            <div className="w-[502.8699951171875px]">
                                {/* new customer - mid text */}
                                <span className="font-[Segoe_UI] font-normal text-[13.89px] leading-6 tracking-[0%] align-middle text-[#7A7A7A]">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</span>
                            </div>
                            <div className="py-5">
                                <ButtonUI buttontype={"A"} text={"Continue"} className={"w-[106.66000366210938px] h-[40px] opacity-100 rounded-[5px] bg-[#F53E32]"} />
                            </div>
                            <div className="flex flex-col  gap-6">
                                {/* returning customer container */}
                                <div>
                                    {/* new customer title */}
                                    <h1 className="font-montserrat font-semibold text-[20px] leading-5 tracking-[0%] align-middle text-[#2B2B2D]">Returning Customer</h1>
                                </div>

                                <div className="flex flex-col  gap-6 ">
                                    {/* Email and password container */}
                                    <div className="flex flex-col gap-[9px]">
                                        {/* Email input */}
                                        <label htmlFor="email" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Email Address*</label>
                                        <input id="email" type="email" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-full h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your Email"></input>
                                    </div>
                                    <div className="flex flex-col gap-[9px]">
                                        {/* Password input */}
                                        <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Password*</label>
                                        <input id="password" type="password" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-full h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your Password"></input>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[15px]">
                                    {/* login button and forgot password */}
                                    <ButtonUI buttontype={"A"} text={"Login"} className={"relative group w-[89.44000244140625px] cursor-pointer overflow-hidden h-[40px] rounded-[5px] bg-[#F53E32] font-manrope flex items-center justify-center text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize"} />
                                    <Link href={"/"} className=" font-[Segoe_UI] font-semibold text-[15px] leading-6 tracking-[0.8px] align-middle underline decoration-solid text-[#2B2B2D]">Forgot Password?</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[856px] h-[556px]  opacity-100 rounded-[5px] bg-[#FFFFFF] border border-solid border-[#E9E9E9] flex flex-col sm:max-xl:items-center sm:max-xl:w-[90%]">
                        {/* Billing Details box */}
                        <div className="flex flex-col gap-3.5 m-5 w-[90%]  ">
                            {/* inner Billing Details box */}
                            <div>
                                {/* Billing Details title */}
                                <h1 className="font-montserrat font-semibold text-[20px] leading-5 tracking-[0%] align-middle text-[#2B2B2D]">Billing Details</h1>
                            </div>
                            <div>
                                {/* Billing Details - checkout options text */}
                                <span className="font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#2B2B2D]">Checkout Options</span>
                            </div>
                            <div className="flex gap-[49px]">
                                {/* Billing Details - checkout options text and radio buttons container */}
                                <div className="flex items-center gap-2">
                                    {/* Billing Details - checkout options text and radio */}
                                    <input type="radio" id="oldaddress" checked={bill === "oldaddress"} onChange={() => { setbill("oldaddress") }} className="accent-[#F53E32]"></input>
                                    <label htmlFor="oldaddress" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">I want to use an existing address</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* Billing Details - checkout options text and radio */}
                                    <input type="radio" id="newaddress" checked={bill === "newaddress"} onChange={() => { setbill("newaddress") }} className="accent-[#F53E32]"></input>
                                    <label htmlFor="newaddress" className="font-[Segoe_UI] font-normal text-[14px] leading-4 tracking-[0%] align-middle text-[#7A7A7A]">I want to use new address</label>
                                </div>
                            </div>
                            <div className="flex py-7 gap-6">
                                {/* First and Last Name container */}
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* first name input */}
                                    <label htmlFor="firstname" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">First Name*</label>
                                    <input id="firstname" type="text" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your First Name"></input>
                                </div>
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* last name input */}
                                    <label htmlFor="lastname" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Last Name*</label>
                                    <input id="lastname" type="text" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your First Name"></input>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[9px] ">
                                {/* Address input */}
                                <label htmlFor="address" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Address*</label>
                                <input id="address" type="text" className="pl-3 w-full outline-0 focus:outline outline-[#F53E32]  h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Address"></input>
                            </div>
                            <div className="flex py-2 gap-6 ">
                                {/* City and Post Code container */}
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* City input */}
                                    <label htmlFor="city" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">City*</label>
                                    <input id="city" type="text" className="pl-3  outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="City"></input>
                                </div>
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* Post Code input */}
                                    <label htmlFor="postcode" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Phone Number*</label>
                                    <input id="postcode" type="tel" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Post Code"></input>
                                </div>
                            </div>
                            <div className="flex py-2 gap-6">
                                {/* Country and Region State container */}
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* Country input */}
                                    <label htmlFor="country" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Country*</label>
                                    <input id="country" type="email" className="pl-3  outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Country"></input>
                                </div>
                                <div className="flex flex-col gap-[9px] w-full">
                                    {/* Region State input */}
                                    <label htmlFor="region" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Region State*</label>
                                    <input id="region" type="tel" className="pl-3  outline-0 focus:outline outline-[#F53E32] w-full h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Region/State"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <ButtonUI buttontype={"A"} text={"Place Order"} className={"w-[129.88999938964844px] h-[40px] font-manrope font-bold text-[14px] leading-[16.8px] tracking-[0.48px] align-middle capitalize  opacity-100 rounded-[5px] bg-[#F53E32]"} />
                    </div>
                </div>
            </section>
        </main >
    )
}