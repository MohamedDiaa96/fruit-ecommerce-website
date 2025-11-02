import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const footerleftcontacts = [{ para: "51 Green St.Huntington ohaio beach ontario, NY11746 KY 4783, USA.", icon: "/material-photos/Footer/Vector.svg" }, { para: "example@email.com", icon: "/material-photos/Footer/Vector2.svg" }, { para: "+91 123 4567890", icon: "/material-photos/Footer/Vector3.svg" }]
    //   the orange icons with text on the left of the footer 
    const footermiddlelinks = [{ title: "Company", link: "About Us", url: "/" }, { link: "Delivery Information", url: "/" }, { link: "Privacy Policy", url: "/" }, { link: "Terms & Conditions", url: "/" }, { link: "contact Us", url: "/" }, { link: "Support Center", url: "/" }]
    //    the second division containing links of the footer 
    const footermiddlelinks2 = [{ title: "Category", link: "Dairy & Bakery", url: "/" }, { link: "Fruits & Vegetable", url: "/" }, { link: "Snack & Spice", url: "/" }, { link: "Juice & Drinks", url: "/" }, { link: "Chicken & Meat", url: "/" }, { link: "Fast Food", url: "/" }]
    //    the third division containing links of the footer 
    const iconlinks = [{ icon: "/material-photos/Footer/Icon.svg", width: 10.44, height: 14, url: "//www.facebook.com" }, { icon: "/material-photos/Footer/Icon2.svg", width: 14.58, height: 14.17, url: "//www.x.com" }, { icon: "/material-photos/Footer/Icon3.svg", width: 14.17, height: 14.17, url: "//www.google.com" }, { icon: "/material-photos/Footer/Icon4.svg", width: 14.17, height: 14.17, url: "//www.instagram.com" }]
    //    the social media icons in the fourth division or on the right of the footer
    const fruitimages = [{ fruit: "/material-photos/Footer/fruit.svg" }, { fruit: "/material-photos/Footer/fruit2.svg" }, { fruit: "/material-photos/Footer/fruit3.svg" }, { fruit: "/material-photos/Footer/fruit4.svg" }, { fruit: "/material-photos/Footer/fruit5.svg" }]
    // the fruit images in small boxes in the bottom fourth division or on the right bottom of the footer
    return (
        <div className="bg-[#F7F7F8] size-full flex items-center min-sm:max-xl:flex-wrap">
            {/* Main Footer Container */}
            <div className="flex items-center h-full w-[100px] min-sm:max-xl:flex-wrap min-sm:max-xl:w-full min-sm:max-xl:h-full min-sm:max-xl:justify-center">
                {/* left Footer fruit image */}
                <Image src="/material-photos/Footer/after.svg" alt="fruit" width={60} height={60}></Image>
            </div>
            <div className="flex flex-col min-sm:max-xl:flex-wrap min-sm:max-xl:w-full min-sm:max-xl:ml-[10%]">
                {/* the middle of the footer */}
                <div className="flex gap-16 min-sm:max-xl:flex-wrap min-sm:max-xl:w-full">
                    {/* the upper middle of Footer container */}
                    <div className="flex flex-col items-start">
                        {/*first middle footer box */}
                        <div className="w-[100%] flex ">
                            <Link href="/Home"><Image src="/material-photos/Navbar/Group 475.svg" className="h-auto w-auto relative right-8 " alt="logo" width={162} height={82}></Image></Link>
                        </div>
                        <div className="h-20">
                            <p className="w-[394.9px] h-[44.5px] font-normal tracking-[0.48px] font-poppins text-sm leading-6 align-middle text-[#7A7A7A] ">FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                        </div>
                        <div className="flex flex-col gap-[18px] ">
                            {/* the three contact info box */}
                            {footerleftcontacts.map((contactinfo, index) => (<div key={index} className="flex items-start gap-[9.52px]">
                                <Image src={contactinfo.icon} alt="icon" width={15} height={18} className="mt-1"></Image>
                                <p className="w-[394.9px]  font-normal tracking-[0.48px] font-poppins text-sm leading-6 align-middle text-[#7A7A7A]">{contactinfo.para}</p>
                            </div>))}
                        </div>
                    </div>
                    <div className=" h-[43vh] flex flex-col items-start justify-center mt-8">
                        {/* second middle footer box */}
                        {footermiddlelinks.map((middlelinks, index) => (<div key={index} className="gap-[18px] flex flex-col h-[100%]">
                            <span className="font-bold text-lg leading-6 align-middle tracking-[0.48px]">{middlelinks.title}</span>
                            <Link className="font-normal hover:underline hover:decoration-[1.4px] font-poppins text-sm leading-6 align-middle tracking-[0.48px] text-[#777777]" href={middlelinks.url}>{middlelinks.link}</Link>
                        </div>))}
                    </div>
                    <div className=" h-[43vh] flex flex-col items-start justify-center mt-8">
                        {/* third middle footer box */}
                        {footermiddlelinks2.map((middlelinks2, index) => (<div key={index} className="gap-[18px] flex flex-col h-[100%]">
                            <span className="font-bold text-lg  leading-6 align-middle tracking-[0.48px]">{middlelinks2.title}</span>
                            <Link className="font-normal font-poppins hover:underline hover:decoration-[1.4px] text-sm leading-6 align-middle tracking-[0.48px] text-[#777777]" href={middlelinks2.url}>{middlelinks2.link}</Link>
                        </div>))}
                    </div>
                    <div className=" h-[43vh] flex flex-col items-start gap-[17.4px] mt-8 ">
                        {/* fourth middle footer box */}
                        <div>
                            <h1 className="w-ful font-bold text-lg leading-6 align-middle tracking-[0.48px]">Subscribe Our Newsletter</h1>
                        </div>
                        <div>
                            {/* input */}
                            <div className="flex  bg-white w-[316px] h-[44px] pl-4 border-1 border-[#00000025] rounded-[4px]"><input type="text" className="placeholder:text-[#7A7A7A] placeholder:font-poppins placeholder:font-normal placeholder:text-sm placeholder:tracking-normal placeholder:align-middle outline-0 bg-white w-[87%]" placeholder="Search Here..."></input><Image className="cursor-pointer" src="/material-photos/Footer/arrow.svg" alt="arrow" width={21} height={21}></Image></div>
                        </div>
                        <div className="flex gap-[4px]">
                            {/* link icons */}
                            {iconlinks.map((icons, index) => (<Link href={icons.url} key={index} className={`${ index === 0 ? "hover:bg-blue-600 transition-all duration-300 group:":""} ${ index === 1 ? "hover:bg-black transition-all duration-300 group":""} ${ index === 2 ? "hover:bg-blue-400  transition-all duration-300 group":""} ${index === 3 ? "transition-all duration-300 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]":""} bg-white border-1 border-solid border-[#E1DFDF] w-[35px] h-[35px] rounded-[5px] flex justify-center group`}>
                                <Image src={icons.icon} alt="icon" width={icons.width} height={icons.height} className={`${ index === 0 ? "group-hover:invert-100 transition-all duration-300":""} ${ index === 1 ? "group-hover:invert-100 transition-all duration-300":""} ${ index === 3 ? "group-hover:invert-100 transition-all duration-300":"group-hover:invert-100 transition-all duration-300"} `}></Image>
                            </Link>))}
                        </div>
                        <main className="flex gap-[12px]">
                            {/* fruit images */}
                            {fruitimages.map((fruits, index) => (<div key={index} className=" w-[73.59px] h-[73.59px] rounded-[5px]"><Image src={fruits.fruit} alt="fruit" width={70} height={70}></Image></div>))}
                        </main>
                    </div>
                </div>
                <div className="min-sm:max-xl:flex-wrap min-sm:max-xl:w-full w-[1296px] h-[57.8px] font-[500] text-sm leading-4 text-center align-middle font-poppins tracking-[0.48px] border-t-1 border-[#E9E9E9] flex justify-center items-center mt-[103px]">
                    {/* bottom footer - copyrights */}
                    <span>© 2024 <Link href="/Home" className="text-[#F53E32] hover:underline hover:decoration-[1.4px]">FoodTrove</Link>, All rights reserved.</span>
                </div>
            </div>
            <div className="flex items-end justify-center h-[65vh] w-[100px] min-sm:max-xl:flex-wrap min-sm:max-xl:w-full min-sm:max-xl:h-full">
                {/* upper right footer fruit image */}
                <Image src="/material-photos/Footer/before.svg" alt="fruit" width={120} height={60}></Image>
            </div>

        </div>
    )
}