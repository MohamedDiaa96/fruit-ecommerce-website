import Image from "next/image";
import OrangeBannerUI from "../../components/Ui/OrangeBannerUI";
import Link from "next/link";
import ButtonUI from "@/app/components/Ui/ButtonUI";

export default function Login() {

    return (
        <main>
            <OrangeBannerUI Title={"Login"} currentpath={"Home - Login"} />
            <section className="flex  py-25 justify-center items-center" >
                {/* register container */}
                <div className="w-[400px] h-[403.75px] opacity-100  rounded-[5px] border bg-[#FFFFFF]  border-solid border-[#E9E9E9]">
                    {/* register viewBox */}
                    <div className="flex  justify-center items-center w-full">
                        {/* logo */}
                        <Image src={"/material-photos/Navbar/Group 475.svg"} className="mr-10" alt="logo" width={162} height={82}></Image>
                    </div>
                    <div className="flex flex-col py-2 gap-6 mx-8">
                        {/* Email and password container */}
                        <div className="flex flex-col gap-[9px]">
                            {/* Email input */}
                            <label htmlFor="email" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Email Address*</label>
                            <input id="email" type="email" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your Email"></input>
                        </div>
                        <div className="flex flex-col gap-[9px]">
                            {/* Password input */}
                            <label htmlFor="password" className="font-poppins font-normal text-[15px] leading-[15px] tracking-[0%] align-middle text-[#444444]">Password*</label>
                            <input id="password" type="password" className="pl-3 outline-0 focus:outline outline-[#F53E32] w-[338px] h-[44.380001068115234px] rounded-[5px] border border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[15px] leading-[15px] tracking-[0%] align-middle  " placeholder="Enter Your Password"></input>
                        </div>
                    </div>
                    <div className="flex mx-8 h-[15%] justify-between items-center">
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
                        <ButtonUI buttontype={"A"} text={"Login"} className={"relative group w-[89.44000244140625px] cursor-pointer overflow-hidden h-[40px] rounded-[5px] bg-[#F53E32] font-manrope flex items-center justify-center text-white font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize"} />
                        <Link href={"/Home/Registeration"} className=" hover:underline font-poppins font-normal text-[16px]  text-[#777777] leading-6 tracking-[0.48px] text-center align-middle">Sign up?</Link>

                    </div>
                </div>
            </section>
        </main>
    )
}