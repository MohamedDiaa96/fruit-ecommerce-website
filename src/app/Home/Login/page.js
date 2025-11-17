'use client'
import Image from "next/image";
import OrangeBannerUI from "../../components/Ui/OrangeBannerUI";
import Link from "next/link";
import ButtonUI from "@/app/components/Ui/ButtonUI";
import { useContext } from "react";
import { AccountContext } from "@/context/accountcontext";

export default function Login() {
    const { accountdata, setaccountdata,
        adduser,
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
            <OrangeBannerUI Title={"Login"} currentpath={"Home - Login"} />
            <section className="flex flex-col gap-10 py-25 justify-center items-center" >
                {/* login container */}
                <div className="w-[400px] h-full opacity-100 pb-5 rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                    {/* login viewBox */}
                    <div className="flex  justify-center items-center w-full">
                        {/* logo */}
                        <Image src={"/material-photos/Navbar/Group 475.svg"} className="mr-10" alt="logo" width={162} height={82}></Image>
                    </div>
                    <div className="flex flex-col py-2 gap-6 mx-8">
                        {/* Email and password container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Email input */}
                            <label htmlFor="email" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Email Address*</label>
                            <input id="email" value={email} onChange={(e) => { setemail(e.target.value) }} type="email" className={`${email && (!email.includes("@") || !email.includes(".com")) ? "pl-3 outline-0 focus:outline outline-red-600 w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle" : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  "}`} placeholder="Enter Your Email"></input>
                            {email && (!email.includes("@") || !email.includes(".com"))  ? (<div><p className="text-red-600">must contain @ and .com</p></div>) : ""}

                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Password input */}
                            <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Password*</label>
                            <input id="password" type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className={` ${password && password?.length < 8  ? "pl-3 outline-0 focus:outline outline-red-600 w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-red-600 font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " : "pl-3 outline-0 focus:outline outline-[#FB9518] w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  "}`} placeholder="Enter Your Password"></input>
                            {password && password?.length < 8 ? (<div><p className="text-red-600">Password Must at least contain 8 Numbers</p></div>) : ""}
                        </div>
                    </div>
                    <div className="flex mx-8 h-15 justify-between items-center">
                        {/* remember me button and forgot password container */}
                        <div className="flex gap-2 items-center ">
                            {/* remember me button */}
                            <input type="checkbox" id="remember" className="rounded cursor-pointer accent-[#F53E32]"></input>
                            <label htmlFor="remember" className="cursor-pointer font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#777777]">Remember Me</label>
                        </div>
                        <div className="flex items-center">
                            {/* forgot password button */}
                            <Link href={"/"} className=" hover:underline font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#777777]">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className=" h-10 flex items-center mx-8 py-7 justify-between">
                        {/* login and sign up container */}
                        <ButtonUI
                            buttontype={"A"}
                            text={"Login"}
                            onclick={() => {
                                const userExists = accountdata.some(
                                    (user) => user.email === email && user.password === password
                                );

                                if (userExists) {
                                    alert("You Have Logged In Successfully");
                                } else {
                                    alert("You Have Failed to Log in");
                                }

                                // Clear inputs
                                setpassword("");
                                setemail("");
                            }}
                            className="relative group w-[89.44px] cursor-pointer overflow-hidden h-[40px] rounded-[5px] bg-[#F53E32] font-manrope flex items-center justify-center text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize" />

                        <Link href={"/Home/Registeration"} className=" hover:underline font-poppins font-normal text-[16px]  text-[#777777] leading-6 tracking-[0.48px] text-center align-middle">Sign up?</Link>

                    </div>
                </div>
            </section>
        </main>
    )
}