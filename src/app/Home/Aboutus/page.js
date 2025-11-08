import OrangeBannerUI from "@/app/components/Ui/OrangeBannerUI";
import Image from "next/image";

export default function Aboutus() {
    const bignumbers = [{ number: "0.1", text: "Vendors" }, { number: "23 ", text: "Customers" }, { number: "2", text: "Products" }]
    const fourboxes = ["Product Packing", "24X7 Support", "Delivery in 5 Days", "Payment Secure"]
    return (
        <main>
            <OrangeBannerUI Title={"About Us"} currentpath={"Home - About Us"} />
            <section className="flex flex-col items-center sm:max-xl:w-full  w-full sm:max-xl:flex-wrap ">
                {/* about us container */}
                <div className="flex items-center h-full w-[90%] sm:max-xl:w-full sm:max-xl:justify-center  justify-center my-20 sm:max-xl:gap-10 sm:max-xl:flex-wrap sm:max-xl:items-center">
                    {/* about us innner container - left and right */}
                    <div className="flex flex-col w-full sm:max-xl:items-center sm:max-xl:w-full gap-[23px] ">
                        {/* left text container */}
                        <div className="flex sm:max-xl:justify-center sm:max-xl:w-full ">
                            {/* about header text */}
                            <h1 className=" font-manrope font-bold text-[36px] leading-[46px] tracking-[0.48px] align-middle text-[#212529]">About The Carrot</h1>
                        </div>
                        <div className="flex flex-col gap-[28.5px] sm:max-xl:items-center sm:max-xl:w-full ">
                            {/* about us middle text */}
                            <p className=" w-[721.8300170898438px] sm:max-xl:w-[80%]  font-poppins font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                                necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                                rerum quod. Tempora magni autem a voluptatibus neque.</p>
                            <p className="w-[684.280029296875px] sm:max-xl:w-[80%]  font-poppins  font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                                accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus
                                suscipit voluptatum eius perferendis amet!.</p>
                            <p className=" w-[727.510009765625px] sm:max-xl:w-[80%]  font-poppins  font-normal text-[14px] leading-[24.5px] tracking-[0.48px] align-middle text-[#7A7A7A]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                                architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
                                libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
                                blanditiis quod aspernatur! Iusto?</p>
                        </div>
                        <div className="sm:max-xl:justify-center flex w-full">
                        <div className="w-[706px] sm:max-xl:w-[80%] sm:max-xl:justify-center  flex h-[142px] opacity-100 rounded-[5px] border border-solid border-[#E9E9E9]  bg-[#F7F7F8]">
                            {/* bottom banner box*/}
                            <div className="flex items-center gap-[111px] w-full sm:max-xl:justify-center sm:max-xl:w-[80%] justify-center h-full">
                                {/* inner bottom banner box */}
                                {bignumbers.map((n, i) => (<div className="flex flex-col items-center justify-center gap-[7px]" key={i}>
                                    <h1 className="font-manrope font-bold text-[60px] leading-[60px] tracking-[0%] text-center align-middle text-[#F53E32] flex items-end gap-1 sm:max-xl:items-center sm:max-xl:text-[40px] ">{n.number}<span className="font-manrope font-bold sm:max-xl:text-[30px]  text-[30px] leading-[30px] tracking-[0%] text-end align-middle text-[#7A7A7A]">k</span></h1>
                                    <span className="font-manrope font-semibold text-[16px] leading-4 tracking-[0.48px] text-center align-middle text-[#212529]">{n.text}</span>
                                </div>))}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full h-full sm:max-xl:w-full  flex ">
                        {/* right image container */}
                        <div className="sm:max-xl:w-full sm:max-xl:justify-center w-full flex  ">
                            <Image src={"/material-photos/Aboutus/aboutusfruit.svg"} className="rounde-[5px]" width={636} height={530} alt="aboutusfruit"></Image>
                        </div>
                    </div>
                </div>
                <div className="w-[1296px] h-[184px] gap-6 flex mb-25  sm:max-xl:w-full sm:max-xl:mb-80 sm:max-xl:flex-wrap sm:max-xl:justify-center  ">
                    {fourboxes.map((b, i) => (<div key={i} className="w-[306px]  h-[184px] items-center justify-center flex flex-col gap-[9px] opacity-100 rounded-[5px] border border-solid  border-[#E9E9E9] bg-[#F7F7F8]">
                        <h1 className="font-poppins font-semibold text-[18px] leading-[30.01px] tracking-[0.48px] text-center align-middle text-[#2B2B2D]">{b}</h1>
                        <span className="font-poppins font-light text-[14px] leading-[22px] tracking-[0.48px] text-center align-middle w-[205.33999633789062px] text-[#7A7A7A]">Lorem ipsum dolor sit amet,
                            consectetur adipisicing</span>
                    </div>))}
                </div>
            </section>
        </main>
    )
}