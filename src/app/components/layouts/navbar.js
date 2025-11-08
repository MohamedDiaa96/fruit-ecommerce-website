'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { productdata } from "../data/ProductData"


export default function Navbar() {

    const navinternallinks = [{ url: "/Home/Login", icon: "/material-photos/Navbar/Vector2.svg", text: "Account", width: "15px", height: "18.38px", path: "M14.0293 18.6875H12.2793V16.9375C12.2793 16.4592 12.1626 16.0187 11.9293 15.6163C11.696 15.2137 11.378 14.8958 10.9755 14.6625C10.573 14.4292 10.1326 14.3125 9.6543 14.3125H4.4043C3.92596 14.3125 3.48555 14.4292 3.08305 14.6625C2.68055 14.8958 2.36263 15.2137 2.1293 15.6163C1.89596 16.0187 1.7793 16.4592 1.7793 16.9375V18.6875H0.0292969V16.9375C0.0292969 16.1442 0.224714 15.4121 0.615547 14.7413C1.00638 14.0704 1.53721 13.5396 2.20805 13.1487C2.87888 12.7579 3.61096 12.5625 4.4043 12.5625H9.6543C10.4476 12.5625 11.1797 12.7579 11.8505 13.1487C12.5214 13.5396 13.0522 14.0704 13.443 14.7413C13.8339 15.4121 14.0293 16.1442 14.0293 16.9375V18.6875ZM7.0293 10.8125C6.0843 10.8125 5.20346 10.5733 4.3868 10.095C3.59346 9.62833 2.96346 8.99833 2.4968 8.205C2.01846 7.38833 1.7793 6.5075 1.7793 5.5625C1.7793 4.6175 2.01846 3.73667 2.4968 2.92C2.96346 2.12667 3.59346 1.49667 4.3868 1.03C5.20346 0.551666 6.0843 0.3125 7.0293 0.3125C7.9743 0.3125 8.85513 0.551666 9.6718 1.03C10.4651 1.49667 11.0951 2.12667 11.5618 2.92C12.0401 3.73667 12.2793 4.6175 12.2793 5.5625C12.2793 6.5075 12.0401 7.38833 11.5618 8.205C11.0951 8.99833 10.4651 9.62833 9.6718 10.095C8.85513 10.5733 7.9743 10.8125 7.0293 10.8125ZM7.0293 9.0625C7.6593 9.0625 8.24263 8.905 8.7793 8.59C9.31596 8.275 9.7418 7.84917 10.0568 7.3125C10.3718 6.77583 10.5293 6.1925 10.5293 5.5625C10.5293 4.9325 10.3718 4.34917 10.0568 3.8125C9.7418 3.27583 9.31596 2.85 8.7793 2.535C8.24263 2.22 7.6593 2.0625 7.0293 2.0625C6.3993 2.0625 5.81596 2.22 5.2793 2.535C4.74263 2.85 4.3168 3.27583 4.0018 3.8125C3.6868 4.34917 3.5293 4.9325 3.5293 5.5625C3.5293 6.1925 3.6868 6.77583 4.0018 7.3125C4.3168 7.84917 4.74263 8.275 5.2793 8.59C5.81596 8.905 6.3993 9.0625 7.0293 9.0625Z" },
    { url: "/", icon: "/material-photos/Navbar/Vector3.svg", text: "Wishlist", width: "18.5px", height: "16.19px", path: "M13.6367 0.397522C14.5117 0.397522 15.3167 0.625022 16.0517 1.08002C16.7867 1.53502 17.3642 2.15336 17.7842 2.93502C18.2276 3.75169 18.4492 4.65586 18.4492 5.64752C18.4492 7.00086 18.1342 8.30169 17.5042 9.55002C16.9676 10.6117 16.2034 11.6325 15.2117 12.6125C14.4417 13.3825 13.5259 14.135 12.4642 14.87C11.8692 15.2784 11.0876 15.7684 10.1192 16.34L9.69922 16.585L9.27922 16.34C8.31089 15.7684 7.52922 15.2784 6.93422 14.87C5.87255 14.135 4.95672 13.3825 4.18672 12.6125C3.19505 11.6325 2.43089 10.6117 1.89422 9.55002C1.26422 8.30169 0.949219 7.00086 0.949219 5.64752C0.949219 4.65586 1.17089 3.75169 1.61422 2.93502C2.03422 2.15336 2.61172 1.53502 3.34672 1.08002C4.08172 0.625022 4.88672 0.397522 5.76172 0.397522C6.52005 0.409189 7.27255 0.595856 8.01922 0.957521C8.64922 1.26086 9.20922 1.65752 9.69922 2.14752C10.1892 1.65752 10.7492 1.26086 11.3792 0.957521C12.1259 0.584188 12.8784 0.397522 13.6367 0.397522ZM10.5217 14.065C11.3151 13.5634 12.0209 13.0675 12.6392 12.5775C13.9692 11.5159 14.9726 10.425 15.6492 9.30502C16.3492 8.13836 16.6992 6.92502 16.6992 5.66502C16.6992 4.98836 16.5651 4.38169 16.2967 3.84502C16.0284 3.30836 15.6609 2.89419 15.1942 2.60252C14.7276 2.31085 14.2084 2.15919 13.6367 2.14752C13.1701 2.14752 12.6976 2.26127 12.2192 2.48877C11.7409 2.71627 11.3151 3.01669 10.9417 3.39002L9.69922 4.63252L8.45672 3.39002C8.08339 3.01669 7.65755 2.71627 7.17922 2.48877C6.70089 2.26127 6.22839 2.14752 5.76172 2.14752C5.20172 2.14752 4.68839 2.29919 4.22172 2.60252C3.75505 2.90586 3.38464 3.32294 3.11047 3.85377C2.8363 4.38461 2.69922 4.98836 2.69922 5.66502C2.69922 6.92502 3.04922 8.13836 3.74922 9.30502C4.42589 10.425 5.42922 11.5159 6.75922 12.5775C7.37755 13.0675 8.08339 13.5634 8.87672 14.065C9.12172 14.2167 9.39589 14.38 9.69922 14.555C10.0026 14.38 10.2767 14.2167 10.5217 14.065Z" },
    { url: "/Home/Cart", icon: "/material-photos/Navbar/Vector4.svg", text: "Cart", width: "18.13px", height: "18.38px", path: "M2.22852 12.5625V2.0625H0.478516V0.3125H3.10352C3.34852 0.3125 3.5556 0.397083 3.72477 0.56625C3.89393 0.735416 3.97852 0.942499 3.97852 1.1875V11.6875H14.8635L16.6135 4.6875H5.72852V2.9375H17.7335C17.9785 2.9375 18.1856 3.02208 18.3548 3.19125C18.5239 3.36042 18.6085 3.5675 18.6085 3.8125C18.6085 3.8825 18.5968 3.9525 18.5735 4.0225L16.386 12.7725C16.3393 12.9708 16.2373 13.1312 16.0798 13.2537C15.9223 13.3762 15.7443 13.4375 15.546 13.4375H3.10352C2.85852 13.4375 2.65143 13.3529 2.48227 13.1838C2.3131 13.0146 2.22852 12.8075 2.22852 12.5625ZM3.97852 18.6875C3.66352 18.6875 3.37185 18.6088 3.10352 18.4513C2.83518 18.2937 2.62227 18.0808 2.46477 17.8125C2.30727 17.5442 2.22852 17.2525 2.22852 16.9375C2.22852 16.6225 2.30727 16.3308 2.46477 16.0625C2.62227 15.7942 2.83518 15.5812 3.10352 15.4237C3.37185 15.2662 3.66352 15.1875 3.97852 15.1875C4.29352 15.1875 4.58518 15.2662 4.85352 15.4237C5.12185 15.5812 5.33477 15.7942 5.49227 16.0625C5.64977 16.3308 5.72852 16.6225 5.72852 16.9375C5.72852 17.2525 5.64977 17.5442 5.49227 17.8125C5.33477 18.0808 5.12185 18.2937 4.85352 18.4513C4.58518 18.6088 4.29352 18.6875 3.97852 18.6875ZM14.4785 18.6875C14.1635 18.6875 13.8718 18.6088 13.6035 18.4513C13.3352 18.2937 13.1223 18.0808 12.9648 17.8125C12.8073 17.5442 12.7285 17.2525 12.7285 16.9375C12.7285 16.6225 12.8073 16.3308 12.9648 16.0625C13.1223 15.7942 13.3352 15.5812 13.6035 15.4237C13.8718 15.2662 14.1635 15.1875 14.4785 15.1875C14.7935 15.1875 15.0852 15.2662 15.3535 15.4237C15.6218 15.5812 15.8348 15.7942 15.9923 16.0625C16.1498 16.3308 16.2285 16.6225 16.2285 16.9375C16.2285 17.2525 16.1498 17.5442 15.9923 17.8125C15.8348 18.0808 15.6218 18.2937 15.3535 18.4513C15.0852 18.6088 14.7935 18.6875 14.4785 18.6875Z" }]

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
        name: "Products", products: [{ link: "All Products", path: "/Home/Products" },
        { link: "Best Sellers", path: "//www.google.com" },
        { link: "New Arrivals", path: "//www.google.com" },
        { link: "On Sale", path: "//www.google.com" },
        { link: "Gift Packs", path: "//www.google.com" },
        { link: "Combo Offers", path: "//www.google.com" },]
    },
    {
        name: "Pages", pages: [
            { link: "Registeration", path: "/Home/Registeration" },
            { link: "Login", path: "/Home/Login" },
            { link: "About Us", path: "/Home/Aboutus" },
            { link: "Our Blog", path: "/Home/Blog" },
            { link: "FAQ", path: "/Home/FAQ" },
            { link: "Delivery Information", path: "//www.google.com" },]
    },
    {
        name: "Blog", blog: [{ link: "Healthy Eating Tips", path: "/Home/Blog" },
        { link: "Fruit Recipes", path: "/Home/Blog" },
        { link: "Seasonal Fruit Guides", path: "/Home/Blog" },
        { link: "Benefits of Organic Fruits", path: "/Home/Blog" },
        { link: "Smoothie Ideas", path: "/Home/Blog" },
        { link: "Storage & Freshness Tips", path: "/Home/Blog" },]
    },
    {
        name: "Elements", elements: [{ link: "Buttons", path: "//www.google.com" },
        { link: "Icons", path: "//www.google.com" },
        { link: "Pricing Tables", path: "//www.google.com" },
        { link: "Testimonials Styles", path: "//www.google.com" },
        { link: "Product Cards", path: "//www.google.com" },
        { link: "Forms & Inputs", path: "//www.google.com" },]
    }];


    const [dropdownmenu, setdropdownmenu] = useState(null)
    const [dropdownmenusidebar, setdropdownmenusidebar] = useState(null)
    const [opensidebar, setopensidebar] = useState(false)

    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setdropdownmenusidebar(null)
                setdropdownmenu(null)
                setfiltereditem([])
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    const categories = [
        "All Categories",
        "Snacks",
        "Vegetables",
        "Pet Foods",
        "Meats",
        "Coffes",
        "Cream",
        "Hodo Foods",
    ]

    const [searchterm, setsearchterm] = useState("")
    const [filtereditem, setfiltereditem] = useState([])
    const [selectedcategory, setselectedcategory] = useState("All Categories")
    const [showsearchcategory, setshowsearchcategory] = useState(false)

    useEffect(() => {
        const inputvalue = searchterm.toLowerCase()
        if (!inputvalue) {
            setfiltereditem([])
            return
        }
        let results = productdata.filter((p) => p.title.toLowerCase().includes(inputvalue))
        if (selectedcategory !== "All Categories") {
            results = results.filter((p) => p.category.toLowerCase() === selectedcategory.toLowerCase())
        }
        setfiltereditem(results)
    }, [searchterm, selectedcategory])
    return (
        <div>
            <div className="flex items-center h-[9vh] w-[100%] shadow-[0px_0px_5px_0px] shadow-[#0000003f] min-sm:max-[738px]:gap-10 min-sm:max-xl:flex-wrap min-sm:max-xl:h-[100%] min-sm:max-xl:w-[100%] min-sm:max-xl:items-center min-sm:max-xl:justify-center min-sm:max-xl:flex-col">
                {/* upper navbar */}
                <div className="flex items-center h-[10vh] w-[10%] ml-[212px] min-sm:max-xl:ml-0 min-sm:max-xl:w-[100%] min-sm:max-xl:flex-wrap min-sm:max-xl:justify-center">
                    {/* left upper of navbar - navbar menu button */}
                    <button onClick={() => { setopensidebar(true) }}><Image src="/material-photos/Navbar/div.cr-category-toggle.svg" alt="category" width={35} height={35} className="cursor-pointer w-auto h-auto rounded-md hover:bg-green-400"></Image></button>
                    {opensidebar && (<div onClick={() => setopensidebar(false)} className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"></div>)}
                    {/* blur effect when opening sidebar */}
                    <div className={`w-[250px] h-screen gap-3 bg-white shadow-lg z-50 fixed top-0 left-0 flex flex-col p-5 transform transition-transform duration-300 ${opensidebar ? "translate-x-0" : "-translate-x-full"}`}>
                        {/* side bar */}
                        <button onClick={() => { setopensidebar(false) }} className="cursor-pointer self-end text-xl font-bold mb-4 pb-4">X</button>
                        {navlinks.map((link, index) => (
                            <div key={index} className="flex w-fit ml-17 gap-1" >
                                {/* page links title */}
                                {link.path ? (<Link href={link.path} className="hover:text-[#F53E32] gap-10 transition-all ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                    {link.url} </Link>) : (<button onMouseEnter={() => { setdropdownmenusidebar(dropdownmenusidebar === link.name ? null : link.name) }} className="hover:text-[#F53E32] transition-all cursor-pointer ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                        {link.name}<Image src="/material-photos/Navbar/Expand_down.svg" className={`${dropdownmenusidebar === link.name ? "rotate-90 transition-all duration-300" : "rotate-270 transition-all duration-300"}`} width={18} height={17} alt="arrowdown"></Image></button>)}
                                <div className="flex h-fit">
                                    {/* sidebar drop down menu position */}
                                    {Object.entries(link).map(([key, value]) => {
                                        if (Array.isArray(value)) {
                                            return (
                                                <div key={key} ref={dropdownRef} className={`${dropdownmenusidebar === link.name ? " fixed scale-x-100 visible origin-left max-h-fit opacity-100 border-1 border-[#0000004f] rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 w-[150px] bg-white shadow-lg z-30 " : " fixed w-[150px] bg-white shadow-lg z-30 transform transition-transform duration-300 flex flex-col opacity-100 scale-x-0 visible max-h-0 origin-left"} `}>
                                                    {/* drop down menu  */}
                                                    {value.map((item, index) => (<Link className=" pl-2 hover:bg-[#F53E32] hover:text-white font-poppins border-1 border-[#0000004f] font-[600] text-[14px]  leading-[21px] tracking-[0.48px] align-middle" key={index} href={item.path}>{item.link}</Link>))}
                                                    {/* drop down links */}
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
                            {link.path ? (<Link href={link.path} className="hover:text-[#F53E32] transition-all ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                {link.url} </Link>) : (<button onClick={() => { setdropdownmenu(dropdownmenu === link.name ? null : link.name) }} className="hover:text-[#F53E32] transition-all cursor-pointer ease-in-out font-poppins flex font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle">
                                    {link.name}<Image id="arrow" src="/material-photos/Navbar/Expand_down.svg" className={`${dropdownmenu === link.name ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`} width={18} height={17} alt="arrowdown"></Image></button>)}
                            {Object.entries(link).map(([key, value]) => {
                                if (Array.isArray(value)) {
                                    return (
                                        <div key={key} ref={dropdownRef} className={`flex flex-col w-[150px] border-1 border-[#0000004f] rounded-lg overflow-hidden h-fit bg-white shadow-lg z-30 absolute transform transition-transform duration-300 translate-y-1 visible translate-x-[-10px] ${dropdownmenu === link.name ? " scale-y-100 visible origin-top max-h-fit" : " scale-y-0 invisible origin-top"} `}>
                                            {/* drop down menu  */}
                                            {value.map((item, index) => (<Link className="border-1 border-[#0000004f] pl-2 hover:bg-[#F53E32]  hover:text-white font-poppins  font-[600] text-[14px] leading-[21px] tracking-[0.48px] align-middle" key={index} href={item.path}>{item.link}</Link>))}
                                            {/* drop down links */}

                                        </div>)
                                }
                            })}

                        </div>))}
                </div>
                <div className="flex items-center h-[10vh] w-[25%] justify-center gap-3 min-sm:max-xl:">
                    {/* right upper navbar - phone icon and number */}
                    <Image src="/material-photos/Navbar/Vector.svg" className="w-auto h-auto" alt="phone" width={15} height={15}></Image>
                    <span className="text-sm leading-5 align-middle font-[400px]">+123 ( 456 ) ( 7890 )</span>
                </div>
            </div>
            <div className="flex items-center h-[12vh] w-[100%] border-b-2 border-b-[#00000024]  min-sm:max-xl:h-[30vh] min-sm:max-xl:w-[100%] min-sm:max-xl:flex-wrap min-sm:max-xl:flex-col">
                {/* bottom navbar */}
                <div className="flex items-center h-[10vh] w-[10%] ml-[190px] min-sm:max-xl:ml-0 min-sm:max-xl:w-full min-sm:max-xl:justify-center min-sm:max-xl:h-auto  ">
                    {/* left bottom navbar - logo */}
                    <Link href="/Home"><Image src="/material-photos/Navbar/Group 475.svg" className="h-auto w-auto " alt="logo" width={162} height={82}></Image></Link>
                </div>
                <div className="flex items-center justify-center h-[10vh] w-[50%] min-sm:max-xl:w-full  min-sm:max-[738px]:scale-80 min-[738px]:max-[790px]:scale-90">
                    {/* middle bottom navbar - search engine */}
                    <div className="flex">
                        <div className="flex flex-col">
                            <input type="text" onChange={(e) => { setsearchterm(e.target.value) }} value={searchterm} placeholder={`Search For ${selectedcategory}...`} className="min-sm:max-xl:w-[500px] min-sm:max-xl:placeholder:text-[13px] h-full w-[350px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] placeholder:font-poppins flex placeholder:font-normal placeholder:text-xs placeholder:tracking-normal placeholder:align-middle outline-0 px-5 border-1 rounded-l-[5px]"></input>
                            {filtereditem.length > 0 && (<div className="bg-white max-h-[252px] w-fit  origin-top rounded-lg shadow-lg absolute mt-10 border border-[#0000004f] z-30 overflow-y-auto">
                                {filtereditem.map((p) => (<Link key={p.id} href={`/Products/${p.id}`} className="hover:bg-[#F53E32] pr-5 gap-2 items-center hover:text-white border border-[#0000004f] flex">
                                    <Image src={p.img} width={40} height={40} alt={p.title} className="rounded-lg "></Image>
                                    <span>{p.title}</span>
                                </Link>))}
                            </div>
                            )}
                        </div>
                        <div className="flex flex-col items-center justify-center relative">
                            <button className="min-sm:max-xl:w-[200px] min-sm:max-xl:text-[15px] h-[45px] w-[130px] border-[#64B496] shadow-[#64B496] shadow-[0px_0px_0.5px_0px] font-normal text-xs leading-5 tracking-normal align-middle flex items-center justify-center border-b-1 border-t-1 gap-2 cursor-pointer" onClick={() => { setshowsearchcategory(!showsearchcategory) }}>{selectedcategory}<Image className={`${showsearchcategory ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"} min-sm:max-xl:w-[19px] min-sm:max-xl:h-[19px]`} alt="arrowdown" width={16} height={16} src="/material-photos/Navbar/Expand_down.svg"></Image></button>
                            <div className={`${!showsearchcategory === false ? "transform transition-all duration-300 scale-y-100 visible max-h-fit origin-top" : " transform transition-all scale-y-0 duration-300 invisible  origin-top"} absolute top-full mt-1 w-[130px] bg-white border border-[#64B496] shadow-md rounded-md flex flex-col z-50 `} >{categories.map((filteritems, index) => (<button key={index} className="py-1 px-2 cursor-pointer hover:bg-[#64B496] hover:text-white text-sm" onClick={() => { setselectedcategory(filteritems); setshowsearchcategory(false); }}>{filteritems}</button>))}</div>
                        </div>
                        <button className="min-sm:max-xl:w-[65px] bg-[#F53E32] w-[45px] h-[45px] opacity-100 rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center cursor-pointer"><Image src="/material-photos/Navbar/Vector5.svg" alt="Searchicon" className="min-sm:max-xl:w-[18px] min-sm:max-xl:h-[18px]" width={14} height={14} ></Image></button>
                    </div>
                </div>
                <div className="flex justify-center min-sm:max-xl:items-center min-sm:max-xl:w-full gap-8 min-sm:max-xl:h-[20%]">
                    {/* right bottom navbar - account,wishlist,Cart */}
                    {navinternallinks.map((internallinks, index) => (<div key={index} className="flex text-[15px] font-poppins font-[500] group  hover:text-[#F53E32] transition-all duration-200  ">
                        {/* account,wishlist,Cart div box */}
                        <Link href={internallinks.url}><div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="..." style={{ width: internallinks.width, height: internallinks.height }} className="fill-black group-hover:fill-[#F53E32] transition-all duration-300">
                                <path d={internallinks.path}></path>
                            </svg>
                            <span >{internallinks.text}</span>
                        </div></Link>
                    </div>))}
                </div>
            </div>
        </div>
    )
}