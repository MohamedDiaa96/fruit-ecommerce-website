import Image from "next/image"

export default function Offerbanner() {
    const offerbannercontent = [{ img: "/material-photos/Home/offersbanner/offericon.svg", text: "Best prices & offers", text2: "Orders $50 or more" },
    { img: "/material-photos/Home/offersbanner/offericon2.svg", text: "Free delivery", text2: "24/7 amazing services" },
    { img: "/material-photos/Home/offersbanner/offericon3.svg", text: "Great daily deal", text2: "When you sign up" },
    { img: "/material-photos/Home/offersbanner/offericon4.svg", text: "Wide assortment", text2: "Mega Discounts" },
    { img: "/material-photos/Home/offersbanner/offericon5.svg", text: "Easy returns", text2: "Within 30 days" }
    ]
    return (
        <div className="flex my-10 mx-17 justify-center gap-0.5 min-sm:max-xl:flex-wrap">
            {/* offerbanner container */}
            {offerbannercontent.map((content, index) => (<div key={index} className=" h-[97px] w-[321px] flex bg-[#F4F6FA] rounded-[10px]">
                {/* the offerbanner */}
                    <div className="flex px-5">
                        {/* image box */}
                        <Image src={content.img} width={60} height={67} alt="icon"></Image>
                    </div>
                    <div className="flex flex-col justify-center">
                        {/* text box */}
                        <h1 className="font-semibold  leading-5 tracking-normal align-middle text-[#242424] font-quicksand">{content.text}</h1>
                        <h2 className="text-[#ADADAD] font-normal text-sm leading-6 tracking-normal align-middle font-lato">{content.text2}</h2>
                    </div>
            </div>))}
        </div>
    )
}