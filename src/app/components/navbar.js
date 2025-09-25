import Image from "next/image"
import Link from "next/link"
import React from "react"

const navlinks = [{name:"Home", path:"/Home"},
    {name:"Category",path:"/"},
    {name:"Products",path:"/"},
{name:"Pages",path:"/"},
{name:"Blog",path:"/"},
{name:"Elements",path:"/"}];

export default function Navbar(){
return(
    <div>
        <div className="flex items-center h-[9vh] w-[100%] shadow-[0px_0px_5px_0px] shadow-[#0000003f] min-sm:max-[722px]:gap-10 min-sm:max-xl:flex-wrap min-sm:max-xl:h-[100%] min-sm:max-xl:w-[100%] min-sm:max-xl:items-center min-sm:max-xl:justify-center min-sm:max-xl:flex-col">
            {/* upper navbar */}
            <div className="flex items-center h-[10vh] w-[10%]  ml-[212px] min-sm:max-xl:ml-0 min-sm:max-xl:w-[100%] min-sm:max-xl:flex-wrap min-sm:max-xl:justify-center">
                {/* left upper of navbar - navbar menu button */}
<Image src="/Material Photos/Navbar/div.cr-category-toggle.svg" alt="category" width={35} height={35} className="cursor-pointer w-auto h-auto"></Image>
        </div>
        <div className="flex items-center h-[10vh] w-[50%] gap-[55.66px] min-sm:max-xl:flex-wrap min-sm:max-xl:gap-15 min-sm:max-xl:justify-center min-sm:max-xl:w-[100%]">
            {/* middle upper navbar - page links */}
{navlinks.map((link,index)=>(<Link key={index} href={link.path} className="font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">{link.name}{link.name !== "Home" && <Image src="/Material Photos/Navbar/Expand_down.svg" width={18} height={17} alt="arrowdown"></Image>}</Link>))}

        </div>
        <div className="flex items-center h-[10vh] w-[25%] justify-center gap-3 min-sm:max-xl:">
            {/* right upper navbar - phone icon and number */}
<Image src="/Material Photos/Navbar/Vector.svg" className="w-auto h-auto" alt="phone" width={15} height={15}></Image>
<span className="text-sm leading-5 align-middle font-[400px]">+123 ( 456 ) ( 7890 )</span>
        </div>
        </div>
        <div className="flex items-center h-[12vh] w-[100%] border-b-2 border-b-[#00000024]  min-sm:max-xl:h-[30vh] min-sm:max-xl:w-[100%] min-sm:max-xl:flex-wrap min-sm:max-xl:flex-col">
{/* bottom navbar */}
<div className="flex items-center h-[10vh] w-[10%] ml-[190px] min-sm:max-xl:ml-0 min-sm:max-xl:w-full min-sm:max-xl:justify-center min-sm:max-xl:h-auto  ">
    {/* left bottom navbar - logo */}
    <Link href="/Home"><Image src="/Material Photos/Navbar/Group 475.svg" className="h-auto w-auto " alt="#" width={162} height={82}></Image></Link>
</div>
<div className="flex items-center justify-center h-[10vh] w-[50%] min-sm:max-xl:w-full">
    {/* middle bottom navbar - search engine */}
    <div className="flex  ">
    <input type="text" placeholder="Search For Items..." className="min-sm:max-xl:w-[500px] min-sm:max-xl:placeholder:text-[13px] w-[350px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] placeholder:font-poppins flex placeholder:font-normal placeholder:text-xs placeholder:tracking-normal placeholder:align-middle outline-0 px-5 border-1 rounded-l-[5px]"></input>
    <button className="min-sm:max-xl:w-[200px] min-sm:max-xl:text-[15px] w-[130px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] font-normal text-xs leading-5 tracking-normal align-middle flex items-center justify-center border-b-1 border-t-1 gap-2 cursor-pointer">All Catergories<Image className="min-sm:max-xl:w-[19px] min-sm:max-xl:h-[19px]" alt="arrowdown" width={16} height={16} src="/Material Photos/Navbar/Expand_down.svg"></Image></button>
    <button className="min-sm:max-xl:w-[65px] bg-[#F53E32] w-[45px] h-[45px] opacity-100 rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center cursor-pointer"><Image src="/Material Photos/Navbar/Vector5.svg" alt="Searchicon" className="min-sm:max-xl:w-[18px] min-sm:max-xl:h-[18px]" width={14} height={14} ></Image></button>
    </div>
</div>
<div className="flex justify-center min-sm:max-xl:items-center min-sm:max-xl:w-full  min-sm:max-xl:h-[20%]">
{/* right bottom navbar - account,wishlist,Cart */}
<div className="flex gap-8 text-[15px] font-poppins font-[500]  ">
    {/* account,wishlist,Cart div box */}
    <Link href="/"><div className="flex gap-2 ">
        {/* Account */}
        <Image src="/Material Photos/Navbar/vector2.svg" alt="account" width={14} height={18}></Image>
<span>Account</span>
    </div></Link>
    <Link href="/"><div className="flex gap-2 ">
        {/* wishlist */}
      <Image src="/Material Photos/Navbar/vector3.svg" alt="wishlist" width={17} height={18}></Image>
<span>Wishlist</span>
    </div></Link>
       <Link href="/"> <div className="flex gap-2 ">
        {/* cart */}
       <Image src="/Material Photos/Navbar/vector4.svg" alt="cart" width={18} height={18}></Image>
<span>Cart</span>
    </div></Link>
</div>
</div>
        </div>
    </div>
)
}