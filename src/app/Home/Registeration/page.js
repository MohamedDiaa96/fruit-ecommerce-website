import Image from "next/image";
import OrangeBannerUI from "../../components/Ui/OrangeBannerUI";
import Link from "next/link";
import ButtonUI from "@/app/components/Ui/ButtonUI";

export default function Registeration() {

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
                            <label htmlFor="firstname" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">First Name*</label>
                            <input id="firstname" type="text" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your First Name"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* last name input */}
                            <label htmlFor="lastname" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Last Name*</label>
                            <input id="lastname" type="text" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your First Name"></input>
                        </div>
                    </div>
                    <div className="flex py-3 gap-6">
                        {/* Email and phone number container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Email input */}
                            <label htmlFor="email" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Email*</label>
                            <input id="email" type="email" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your email"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Phone number input */}
                            <label htmlFor="phone" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Phone Number*</label>
                            <input id="phone" type="tel" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your phone number"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[9px] my-2">
                        {/* Password input */}
                        <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Password*</label>
                        <input id="password" type="password" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your Password"></input>
                    </div>
                    <div className="flex flex-col gap-[9px] my-6">
                        {/* Address input */}
                        <label htmlFor="address" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Address*</label>
                        <input id="address" type="text" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[538px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Address"></input>
                    </div>

                    <div className="flex py-2 gap-6">
                        {/* City and Post Code container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* City input */}
                            <label htmlFor="city" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">City*</label>
                            <input id="city" type="text" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="City"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Post Code input */}
                            <label htmlFor="postcode" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Phone Number*</label>
                            <input id="postcode" type="tel" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Post Code"></input>
                        </div>
                    </div>
                    <div className="flex py-2 gap-6">
                        {/* Country and Region State container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Country input */}
                            <label htmlFor="country" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Country*</label>
                            <input id="country" type="email" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Country"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Region State input */}
                            <label htmlFor="region" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Region State*</label>
                            <input id="region" type="tel" className="pl-3 bg-[#EFEFEF] outline-0 focus:outline outline-[#F53E32] w-[257px] h-[41.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Region/State"></input>
                        </div>
                    </div>
                    <div className="w-[562px] h-10 flex items-center py-7 justify-between">
                        {/* signup button and account login button */}
                        <ButtonUI buttontype={"A"} text={"Sign Up"} className={"relative group w-[89.44000244140625px] cursor-pointer overflow-hidden h-[40px] rounded-[5px] bg-[#F53E32] font-manrope flex items-center justify-center text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize"} />
                        <Link href={"/Home/Login"} className=" hover:underline segoeui font-normal text-[16px] mr-5 text-[#777777] leading-6 tracking-[0.48px] text-center align-middle">Have an account?</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}