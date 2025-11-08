import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {

    const content = [{
        img: "/material-photos/Blog/blog2.svg",
        text: "Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!"
    },
    {
        img: "/material-photos/Blog/blog3.svg",
        text: "Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!"
    },
    ]
    const squares = ["Cabbage", "Appetizer", "Meat Food"]

    const iconlinks = [{ icon: "/material-photos/Footer/Icon.svg", width: 10.44, height: 14, url: "//www.facebook.com" },
    { icon: "/material-photos/Footer/Icon2.svg", width: 14.58, height: 14.17, url: "//www.x.com" },
    { icon: "/material-photos/Footer/Icon4.svg", width: 14.17, height: 14.17, url: "//www.instagram.com" },
    { icon: "/material-photos/Blog/linkedin.svg", width: 14.17, height: 14.17, url: "//www.linkedin.com" },
    ]


    return (
        <main>
            <OrangeBannerUI Title={"Blog"} currentpath={"Home - Blog Details"} />
            <section className="flex flex-col items-center w-full">
                {/* Blog container */}
                <div className="flex flex-col items-center w-[90%] my-20">
                    {/* inner Blog container */}
                    <div>
                        {/* inner blog container div */}
                        <div className="flex flex-col gap-[30px]">
                            {/* Front Head Image and text */}
                            <Image src={"/material-photos/Blog/blog.svg"} width={1296} height={621.9500122070312} className="rounded-[5px]" alt="blogimage"></Image>
                            <span className="font-poppins font-semibold text-[15px] leading-[30px] tracking-[0.48px] align-middle text-[#F53E32]">By Admin <span className="font-poppins font-semibold text-[15px] leading-[30px] tracking-[0.48px] align-middle text-[#7A7A7A]"> / 07 Comment / Date - 09 ,09 ,2024</span></span>
                        </div>
                        <div className="py-5 flex flex-col gap-4">
                            {/* header and text */}
                            <h1 className="font-manrope font-bold text-[32px] leading-[38.4px] tracking-[0.48px] align-middle text-[#2B2B2D]">Health Benefits of a Row food</h1>
                            <p className="font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iure enim itaque. Iste qui exercitationem et odit beatae
                                debitis ratione molestiae quis atque.</p>
                            <p className="font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio nobis eum voluptatem laudantium magni veritatis sint! Aspernatur est quisquam modi
                                laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic nisi nostrum repellendus dolorem placeat vero odit.</p>
                        </div>
                        <div className="flex gap-6">
                            {/* img ,arrow and text */}
                            {content.map((b, index) => (<div className="flex flex-col" key={index}>
                                <Image src={b.img} width={636} height={305.2200012207031} className="rounded-[5px]" alt={b.text}></Image>
                                <div className="flex items-center gap-2.5">
                                    <div className="bg-[#F53E32] sm:max-xl:w-10  rounded-full w-5 h-5 text-center content-center text-sm flex items-center justify-center text-white">🠮</div>
                                    <span className="font-poppins font-bold text-[16px] leading-[28.8px] tracking-[0.48px] align-middle text-[#2B2B2D]">{b.text}</span>
                                </div>
                            </div>))}
                        </div>
                        <div className="my-10 w-full h-[153px] sm:max-xl:h-fit opacity-100 rounded-[5px] border border-solid border-[#E9E9E9] bg-white">
                            {/* content box */}
                            <div className="m-5 flex flex-col gap-[19px]">
                                {/* inner content box */}
                                <p className="font-poppins font-medium text-[14px] leading-7 tracking-[0.48px] align-middle text-[#2B2B2D]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis
                                    possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste exercitationem rem.</p>
                                <div className="flex justify-between w-full ">
                                    {/* text and cloud image */}
                                    <h1 className="font-poppins font-bold text-[20px] leading-5 tracking-[0.48px] align-middle text-[#F53E32]">John martin</h1>
                                    <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 11.5C0 9.40444 0.523889 7.46222 1.57167 5.67333C2.59389 3.96111 3.96111 2.59389 5.67333 1.57167C7.46222 0.523888 9.40444 0 11.5 0H26.8333C28.9033 0 30.8328 0.523888 32.6217 1.57167C34.3594 2.59389 35.7394 3.97389 36.7617 5.71167C37.8094 7.50056 38.3333 9.43 38.3333 11.5V34.5H11.5C9.43 34.5 7.50056 33.9761 5.71167 32.9283C3.97389 31.9061 2.59389 30.5261 1.57167 28.7883C0.523889 26.9994 0 25.07 0 23V11.5ZM34.5 30.6667V11.5C34.5 10.12 34.155 8.84222 33.465 7.66667C32.775 6.49111 31.8422 5.55833 30.6667 4.86833C29.4911 4.17833 28.2133 3.83333 26.8333 3.83333H11.5C10.12 3.83333 8.84222 4.17833 7.66667 4.86833C6.49111 5.55833 5.55833 6.48472 4.86833 7.6475C4.17833 8.81028 3.83333 10.0944 3.83333 11.5V23C3.83333 24.38 4.17833 25.6578 4.86833 26.8333C5.55833 28.0089 6.49111 28.9417 7.66667 29.6317C8.84222 30.3217 10.12 30.6667 11.5 30.6667H34.5ZM23 15.3333H26.8333V19.1667H23V15.3333ZM11.5 15.3333H15.3333V19.1667H11.5V15.3333Z" fill="#f53f3258" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            {/* bottom page text */}
                            <p className="font-poppins font-normal text-[14px] leading-[26.14px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga molestiae architecto ipsa excepturi laudantium molestias, assumenda vel
                                fugiat hic exercitationem. Necessitatibus itaque et id! Ratione accusantium voluptatum optio rerum facilis expedita.</p>
                        </div>
                        <div className="w-full h-[64px] justify-center flex opacity-100 rounded-[5px] bg-[#FFFFFF] border border-solid border-[#E9E9E9]">
                            {/* bottom content box */}
                            <div className="flex items-center justify-between h-full w-[95%] gap-[5px]">
                                {/* inner bottom content box */}
                                <div className="flex gap-[5px] " >
                                    {/* squared buttons */}
                                    {squares.map((s, i) => (
                                        <button key={i} className=" flex items-center justify-center w-[102.16999816894531px] h-[32px] opacity-100 top-[5px] left-[5px] rounded-[5px] bg-[#FFFFFF] border-[1px] border-solid border-[#E9E9E9] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize text-[#7A7A7A]">{s}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-[5px]">
                                    {/* link icons */}
                                    {iconlinks.map((icons, index) => (<Link href={icons.url} key={index} className={`${index === 0 ? "hover:bg-blue-600 transition-all duration-300 group:" : ""} ${index === 1 ? "hover:bg-black transition-all duration-300 group" : ""} ${index === 3 ? "hover:bg-blue-400  transition-all duration-300 group" : ""} ${index === 2 ? "transition-all duration-300 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045]" : ""} bg-white border-1 border-solid border-[#E1DFDF] w-[35px] h-[35px] rounded-[5px] flex justify-center group`}>
                                        <Image src={icons.icon} alt="icon" width={icons.width} height={icons.height} className={`${index === 0 ? "group-hover:invert-100 transition-all duration-300" : ""} ${index === 1 ? "group-hover:invert-100 transition-all duration-300" : ""} ${index === 3 ? "group-hover:invert-100 transition-all duration-300" : "group-hover:invert-100 transition-all duration-300"} `}></Image>
                                    </Link>))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center h-full w-full justify-center my-6">
                            {/* pagination */}
                            <button className="cursor-pointer w-[91.69000244140625px] bg-[#F7F7F8] h-[38px] opacity-100 border rounded-tl-md rounded-bl-md  border-solid border-[#E9E9E9] font-[Segoe_UI] font-normal text-[16px] leading-6 tracking-[0.48px] align-middle text-[#777777]">Previous</button>
                            <button className="cursor-pointer w-[35.38999938964844px] h-[38px] opacity-100 top-[1927.61px] left-[923.58px] bg-[#F53E32] font-[Segoe_UI] font-normal text-[16px] leading-[24px] tracking-[0.48px] align-middle text-white">1</button>
                            <button className="cursor-pointer w-[35.38999938964844px] h-[38px] opacity-100 top-[1927.61px] left-[923.58px] bg-white font-[Segoe_UI] font-normal text-[16px] leading-[24px] tracking-[0.48px] align-middle border border-solid border-[#E9E9E9] text-[#777777]">2</button>
                            <button className="cursor-pointer w-[35.38999938964844px] h-[38px] opacity-100 top-[1927.61px] left-[923.58px] bg-white font-[Segoe_UI] font-normal text-[16px] leading-[24px] tracking-[0.48px] align-middle border border-solid border-[#E9E9E9] text-[#777777]">3</button>
                            <button className="cursor-pointer w-[60.36000061035156px] h-[38px] opacity-100 border rounded-tr-[6px] rounded-br-[6px] bg-[#FFFFFF] border-[1px] border-solid border-[#E9E9E9] border-[font-family:] border-[Segoe] border-[UI] font-normal text-[16px] leading-[24px] tracking-[0.48px] align-middle text-[#777777]">Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}