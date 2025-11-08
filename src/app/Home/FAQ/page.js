'use client'
import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI";
import Image from "next/image";
import { useState } from "react";

export default function FAQ() {
    const FAQbox = [
        { question: "What Facilities Does Your Hotel Have?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "How Do I Book A Room For My Vacation?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "How We are best among others?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "Is There Any Fitness Center In Your Hotel?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "What Type Of Room Service Do You Offer?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "What Facilities Does Your Hotel Have?", img: "/material-photos/FAQ/arrow.svg" },
        { question: "How Do I Book A Room For My Vacation?", img: "/material-photos/FAQ/arrow.svg" },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleBox = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            <OrangeBannerUI Title={"FAQ"} currentpath={"Home - Faq"} />
            <section className="flex items-center sm:max-xl:w-full w-full sm:max-xl:flex-wrap">
                <div className="flex items-center h-full w-[90%] sm:max-xl:w-full sm:max-xl:justify-center justify-center my-20 sm:max-xl:gap-10 sm:max-xl:flex-wrap sm:max-xl:items-center">
                    <div>
                        <Image src={"/material-photos/FAQ/fruit.svg"} width={636} height={530} className="rounded-[5px]" alt="fruit" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-2.5 sm:max-xl:items-center ">
                    {FAQbox.map((box, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`w-[636px] rounded-[5px] border border-solid border-[#E9E9E9] bg-[#FFFFFF] transition-all duration-300 ${isOpen ? "h-[156.5px]" : "h-[52px]"
                                    }`}
                            >
                                {/* Header */}
                                <div
                                    className="border-b border-solid border-[#E9E9E9] items-center justify-between flex px-6 h-[52px] cursor-pointer"
                                    onClick={() => toggleBox(index)}
                                >
                                    <h1 className="font-poppins font-normal text-[16px] leading-[19.2px] text-[#000000]">
                                        {box.question}
                                    </h1>
                                    <Image
                                        src={box.img}
                                        width={6.5}
                                        height={10.6}
                                        alt="arrow"
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
                                    />
                                </div>

                                {/* Answer */}
                                {isOpen && (
                                    <div className="m-4">
                                        <p className="font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] text-[#7A7A7A]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus
                                            eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto.
                                            Libero, vero natus.
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
