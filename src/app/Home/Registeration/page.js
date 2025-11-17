'use client'

import Image from "next/image";
import OrangeBannerUI from "../../components/Ui/OrangeBannerUI";
import Link from "next/link";
import ButtonUI from "@/app/components/Ui/ButtonUI";
import { useContext, useEffect } from "react";
import { AccountContext } from "@/context/accountcontext";
import { useRouter } from "next/navigation";

export default function Registeration() {

    const router = useRouter()

    const { accountdata, setaccountdata,
        accountdataarray,
        firstname, setfirstname,
        lastname, setlastname,
        email, setemail,
        phone, setphone,
        password, setpassword,
        confirmpassword, setconfirmpassword,
        address, setaddress,
        postcode, setpostcode } = useContext(AccountContext)


    return (
        <main>
            <OrangeBannerUI Title={"Register"} currentpath={"Home - Register"} />
            <section className="flex  py-25 justify-center items-center" >
                {/* register container */}
                <div className="w-[600px]  h-full px-7 pb-5 opacity-100 rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                    {/* register viewBox */}
                    <div className="flex  justify-center items-center w-full">
                        {/* logo */}
                        <Image src={"/material-photos/Navbar/Group 475.svg"} className="mr-10" alt="logo" width={162} height={82}></Image>
                    </div>
                    <div className="flex py-7 gap-6">
                        {/* First and Last Name container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* first name input */}
                            <label htmlFor="firstname" className=" font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">First Name*</label>
                            <input value={firstname} onChange={(e) => { setfirstname(e.target.value); }} id="firstname" type="text" className={`${firstname && firstname?.length === 0  ? "pl-3 outline-0 focus:outline outline-red-600 w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#fb9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle"}`} placeholder="Enter Your First Name"></input>
                            {firstname && firstname?.length === 0 ? (<div><p className="text-red-600">must contain 3 character at least</p></div>) : ""}
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* last name input */}
                            <label htmlFor="lastname" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Last Name*</label>
                            <input value={lastname} onChange={(e) => { setlastname(e.target.value); }} id="lastname" type="text" className={`${lastname && lastname?.length === 0 ? "pl-3 outline-0 focus:outline outline-red-600 w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#fb9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle"} `} placeholder="Enter Your First Name"></input>
                            {lastname && lastname?.length === 0  ? (<div><p className="text-red-600">must contain 3 character at least</p></div>) : ""}

                        </div>
                    </div>
                    <div className="flex py-3 gap-6">
                        {/* Email and phone number container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Email input */}
                            <label htmlFor="email" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Email*</label>
                            <input value={email} onChange={(e) => { setemail(e.target.value); }} id="email" type="email" className={`${email && (!email.includes("@") || !email.includes(".com"))  ? " pl-3 outline-0 focus:outline outline-red-600 w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " : " pl-3 outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  "}`} placeholder="Enter Your email"></input>
                            {email && (!email.includes("@") || !email.includes(".com"))  ? (<div><p className="text-red-600">must contain @ and .com</p></div>) : ""}
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Phone number input */}
                            <label htmlFor="phone" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Phone Number*</label>
                            <input value={phone} id="phone" type="tel" onChange={(e) => { setphone(e.target.value) }} className={`${phone && (phone?.length !== 11) ? "pl-3 outline-0 focus:outline outline-red-600 w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  "}`} placeholder="Enter Your phone number"></input>
                            {phone && (phone?.length !== 11) ? (<div><p className="text-red-600">must contain 11 numbers</p></div>) : ""}

                        </div>
                    </div>
                    <div className="flex py-3 gap-6 flex-col">
                        {/* Password input and confirm Password input */}
                        <div className="flex flex-col gap-[9px] ">
                            {/* Password input */}
                            <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Password*</label>
                            <input value={password} id="password" type="password" onChange={(e) => { setpassword(e.target.value) }} className={`${password && password?.length < 8  ? "pl-3 outline-0 focus:outline outline-red-600 w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle"}`} placeholder="Enter Your Password"></input>
                            {password && password?.length < 8 ? (<div><p className="text-red-600">Password Must at least contain 8 Numbers</p></div>) : ""}
                        </div>
                        <div className="flex flex-col gap-[9px] ">
                            {/* confirm Password input */}
                            <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Confirm Password*</label>
                            <input value={confirmpassword} id="password" type="password" onChange={(e) => { setconfirmpassword(e.target.value) }} className={`${confirmpassword && confirmpassword !== password  ? "pl-3 outline-0 focus:outline outline-red-600 w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle"}`} placeholder="Enter Your Password"></input>
                            {confirmpassword && confirmpassword !== password  ? (<div><p className="text-red-600">Password Must Be Matched</p></div>) : ""}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[9px] my-4">
                        {/* Address input */}
                        <label htmlFor="address" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]" >Address*</label>
                        <input id="address" value={address} type="text" onChange={(e) => { setaddress(e.target.value); }} className={`${address && address?.length === 0 ? "pl-3 outline-0 focus:outline outline-red-600 w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle"}`} placeholder="Address"></input>
                        {address?.length === 0 && (<div><p className="text-red-600">Address Must Be Added</p></div>)}
                    </div>
                    <div className="flex py-2 gap-6">
                        {/* City and Post Code container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* City input */}
                            <label htmlFor="city" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">City*</label>
                            <input id="city" type="text" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle cursor-not-allowed " disabled placeholder="City"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Post Code input */}
                            <label htmlFor="postcode" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Post Code*</label>
                            <input value={postcode} id="postcode" type="tel" onChange={(e) => { setpostcode(e.target.value) }} className={`${postcode && (postcode?.length !== 2) ? "pl-3 outline-0 focus:outline outline-red-600 w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  "}`} placeholder="Post Code"></input>
                            {postcode && (postcode?.length !== 2)  ? (<div><p className="text-red-600">must contain 2 numbers</p></div>) : ""}
                        </div>
                    </div>
                    <div className="flex py-2 gap-6">
                        {/* Country and Region State container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Country input */}
                            <label htmlFor="country" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Country*</label>
                            <input id="country" type="email" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle cursor-not-allowed  " disabled placeholder="Country"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Region State input */}
                            <label htmlFor="region" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Region State*</label>
                            <input id="region" type="tel" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#FB9518] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle cursor-not-allowed " disabled placeholder="Region/State"></input>
                        </div>
                    </div>
                    <div className="w-[562px] h-10 flex items-center py-7 justify-between">
                        {/* signup button and account login button */}
                        <ButtonUI buttontype={"A"} onclick={() => {
                            setaccountdata(accountdataarray);
                            setfirstname("")
                            setlastname("")
                            setemail("")
                            setphone("")
                            setpassword("")
                            setconfirmpassword("")
                            setaddress("")
                            setpostcode("")
                            setTimeout(() => {
                                router.push("/Home/Registeration/Reroutepage")
                            }, 3000);
                        }} text={"Sign Up"} className={"relative group w-[89.44000244140625px] cursor-pointer overflow-hidden h-[40px] rounded-[5px] bg-[#F53E32] font-manrope flex items-center justify-center text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize"} />
                        <Link href={"/Home/Login"} className=" hover:underline segoeui font-normal text-[16px] mr-5 text-[#777777] leading-6 tracking-[0.48px] text-center align-middle">Have an account?</Link>
                   {/* <button onClick={()=>{console.log(accountdata);  }}>button</button> */}
                    </div>
                </div>
            </section>
        </main>
    )
}