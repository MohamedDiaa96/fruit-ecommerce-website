'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"


export default function Navbar() {


    const navlinks = [{ url: "Home", path: "/Home" },
    {
        name: "Category", category: [{ link: "Fresh Fruits", path: "//www.google.com" },
        { link: "Imported Fruits", path: "//www.google.com" },
        { link: "Organic Fruits", path: "//www.google.com" },
        { link: "Seasonal Fruits", path: "//www.google.com" },
        { link: "Dry Fruits", path: "//www.google.com" },
        { link: "Fruit Boxes", path: "//www.google.com" },]
    },
    {
        name: "Products", products: [{ link: "All Products", path: "//www.google.com" },
        { link: "Best Sellers", path: "//www.google.com" },
        { link: "New Arrivals", path: "//www.google.com" },
        { link: "On Sale", path: "//www.google.com" },
        { link: "Gift Packs", path: "//www.google.com" },
        { link: "Combo Offers", path: "//www.google.com" },]
    },
    {
        name: "Pages", pages: [{ link: "About Us", path: "//www.google.com" },
        { link: "Our Farmers", path: "//www.google.com" },
        { link: "Testimonials", path: "//www.google.com" },
        { link: "FAQ", path: "//www.google.com" },
        { link: "Contact Us", path: "//www.google.com" },
        { link: "Delivery Information", path: "//www.google.com" },]
    },
    {
        name: "Blog", blog: [{ link: "Healthy Eating Tips", path: "//www.google.com" },
        { link: "Fruit Recipes", path: "//www.google.com" },
        { link: "Seasonal Fruit Guides", path: "//www.google.com" },
        { link: "Benefits of Organic Fruits", path: "//www.google.com" },
        { link: "Smoothie Ideas", path: "//www.google.com" },
        { link: "Storage & Freshness Tips", path: "//www.google.com" },]
    },
    {
        name: "Elements", elements: [{ link: "Buttons", path: "//www.google.com" },
        { link: "Icons", path: "//www.google.com" },
        { link: "Pricing Tables", path: "//www.google.com" },
        { link: "Testimonials Styles", path: "//www.google.com" },
        { link: "Product Cards", path: "//www.google.com" },
        { link: "Forms & Inputs", path: "//www.google.com" },]
    }];

    const searchfiltertitle = [{ item: "All Categories" }, { item: "Vegetables" }, { item: "Fruits" }, { item: "Juice" }, { item: "Cans" }]
    const [selectcategory, setselectedcategory] = useState("")
    const [searchfilter, setsearchfilter] = useState(false)
    const [dropdownmenu, setdropdownmenu] = useState(null)
    const [dropdownmenusidebar, setdropdownmenusidebar] = useState(null)
    const [opensidebar, setopensidebar] = useState(false)

    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if ( dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setdropdownmenusidebar(null)
                setdropdownmenu(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div>
            <div className="flex items-center h-[9vh] w-[100%] shadow-[0px_0px_5px_0px] shadow-[#0000003f] min-sm:max-[738px]:gap-10 min-sm:max-xl:flex-wrap min-sm:max-xl:h-[100%] min-sm:max-xl:w-[100%] min-sm:max-xl:items-center min-sm:max-xl:justify-center min-sm:max-xl:flex-col">
                {/* upper navbar */}
                <div className="flex items-center h-[10vh] w-[10%] ml-[212px] min-sm:max-xl:ml-0 min-sm:max-xl:w-[100%] min-sm:max-xl:flex-wrap min-sm:max-xl:justify-center">
                    {/* left upper of navbar - navbar menu button */}
                    <button onClick={() => { setopensidebar(true) }}><Image src="/Material Photos/Navbar/div.cr-category-toggle.svg" alt="category" width={35} height={35} className="cursor-pointer w-auto h-auto rounded-md hover:bg-green-400"></Image></button>
                    {opensidebar && (<div onClick={() => setopensidebar(false)} className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"></div>)}
                    {/* blur effect when opening sidebar */}
                    <div className={`w-[250px] h-screen gap-3 bg-white shadow-lg z-50 fixed top-0 left-0 flex flex-col p-5 transform transition-transform duration-300 ${opensidebar ? "translate-x-0" : "-translate-x-full"}`}>
                        {/* side bar */}
                        <button onClick={() => { setopensidebar(false) }} className="cursor-pointer self-end text-xl font-bold mb-4 pb-4">X</button>
                        {navlinks.map((link, index) => (
                            <div key={index} className="flex w-fit ml-17 gap-1" >
                                {/* page links title */}
                                {link.path ? (<Link href={link.path} className="hover:scale-110 gap-10 transition-all ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                    {link.url} </Link>) : (<button onMouseEnter={() => { setdropdownmenusidebar(dropdownmenusidebar === link.name ? null : link.name) }} className="hover:scale-110 transition-all cursor-pointer ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                        {link.name}<Image src="/Material Photos/Navbar/Expand_down.svg" className={`${dropdownmenusidebar === link.name ? "rotate-90 transition-all duration-300" : "rotate-270 transition-all duration-300"}`} width={18} height={17} alt="arrowdown"></Image></button>)}
                                <div className="flex h-fit">
                                    {Object.entries(link).map(([key, value]) => {
                                        if (Array.isArray(value)) {
                                            return (
                                                <div key={key} ref={dropdownRef} className={`${dropdownmenusidebar === link.name ? " fixed scale-x-100 visible origin-left max-h-fit opacity-100  flex flex-col transform transition-transform duration-300 w-[150px] bg-white shadow-lg z-30 " : " fixed w-[150px] bg-white shadow-lg z-30 transform transition-transform duration-300 flex flex-col opacity-100 scale-x-0 visible max-h-0 origin-left"} `}>
                                                    {value.map((item, index) => (<Link className="border-1 pl-2 hover:underline font-poppins border-[#0000004f] font-[600] text-[14px]  leading-[21px] tracking-[0.48px] align-middle" key={index} href={item.path}>{item.link}</Link>))}
                                                </div>)
                                        }
                                    })}
                                </div>
                            </div>))}
                    </div>
                </div>
                <div className="flex items-center h-[10vh] w-[50%] gap-[55.66px] min-sm:max-xl:flex-wrap min-sm:max-xl:gap-15 min-sm:max-xl:justify-center min-sm:max-xl:w-[100%]">
                    {/* middle upper navbar - page links */}
                    {navlinks.map((link, index) => (
                        <div key={index} >
                            {/* page links title */}
                            {link.path ? (<Link href={link.path} className="hover:scale-110 transition-all ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                {link.url} </Link>) : (<button onMouseEnter={() => { setdropdownmenu(dropdownmenu === link.name ? null : link.name) }} className="hover:scale-110 transition-all cursor-pointer ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                    {link.name}<Image id="arrow" src="/Material Photos/Navbar/Expand_down.svg" className={`${dropdownmenu === link.name ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`} width={18} height={17} alt="arrowdown"></Image></button>)}
                            {Object.entries(link).map(([key, value]) => {
                                if (Array.isArray(value)) {
                                    return (
                                        <div key={key} ref={dropdownRef} className={`flex flex-col w-[150px] h-fit bg-white shadow-lg z-30 absolute transform transition-transform duration-300 translate-y-1 visible translate-x-[-10px] ${dropdownmenu === link.name ? " scale-y-100 visible origin-top max-h-fit" : " scale-y-0 invisible origin-top"} `}>
                                            {value.map((item, index) => (<Link className="border-1 pl-2 hover:underline font-poppins border-[#0000004f] font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle" key={index} href={item.path}>{item.link}</Link>))}
                                        </div>)
                                }
                            })}

                        </div>))}
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
                    <Link href="/Home"><Image src="/Material Photos/Navbar/Group 475.svg" className="h-auto w-auto " alt="logo" width={162} height={82}></Image></Link>
                </div>
                <div className="flex items-center justify-center h-[10vh] w-[50%] min-sm:max-xl:w-full  min-sm:max-[738px]:scale-80 min-[738px]:max-[790px]:scale-90">
                    {/* middle bottom navbar - search engine */}
                    <div className="flex">
                        <input type="search" placeholder="Search For Items..." className="min-sm:max-xl:w-[500px] min-sm:max-xl:placeholder:text-[13px] w-[350px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] placeholder:font-poppins flex placeholder:font-normal placeholder:text-xs placeholder:tracking-normal placeholder:align-middle outline-0 px-5 border-1 rounded-l-[5px]"></input>
                        <div className="flex flex-col items-center justify-center relative">
                            <button className="min-sm:max-xl:w-[200px] min-sm:max-xl:text-[15px] h-[45px] w-[130px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] font-normal text-xs leading-5 tracking-normal align-middle flex items-center justify-center border-b-1 border-t-1 gap-2 cursor-pointer" onClick={() => { setsearchfilter(!searchfilter) }}>{selectcategory || "All Categories"}<Image className={`${searchfilter ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"} min-sm:max-xl:w-[19px] min-sm:max-xl:h-[19px]`} alt="arrowdown" width={16} height={16} src="/Material Photos/Navbar/Expand_down.svg"></Image></button>
                             <div className={`${!searchfilter === false? "transform transition-all duration-300 scale-y-100 visible max-h-fit origin-top" : " transform transition-all scale-y-0 duration-300 invisible  origin-top" } absolute top-full mt-1 w-[130px] bg-white border border-[#64B496] shadow-md rounded-md flex flex-col z-50 `} >{searchfiltertitle.map((filteritems, index) => (<button key={index} className="py-1 px-2 cursor-pointer hover:bg-[#64B496] hover:text-white text-sm" onClick={() => { setselectedcategory(filteritems.item); setsearchfilter(false); }}>{filteritems.item}</button>))}</div>
                        </div>
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