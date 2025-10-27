import { productdata } from "@/app/components/data/ProductData"
import ProductCardUI from "@/app/components/Ui/ProductCardUI"

export default function Fourproductsections() {
    const topselling = productdata.slice(20, 23)
    const trendingproducts = productdata.slice(23, 26)
    const recentalyadded = productdata.slice(26, 29)
    const toprated = productdata.slice(29, 32)
    return (
        <div className="mx-17 flex justify-between w-[92%] min-sm:max-xl:flex-wrap min-sm:max-xl:justify-center">
            {/* Four product sections container */}
            <div className="flex flex-col">
                {/* product details box */}
                <section className="border-b-1 border-[#ECECEC] w-[200px] h-[49px] after:content-[''] after:block after:relative after:mt-[19px] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] ">
                    {/* title container */}
                    <h3 className="font-bold text-2xl leading-7 tracking-normal align-middle text-[#253D4E] font-quicksand ">Top Selling</h3>
                </section>
                <div className="flex flex-col mt-[30px] justify-between h-[70vh] w-[90%]">
                    {/* product card */}
                    {topselling.map((p) => (<ProductCardUI key={p.id} cardtype={"D"} {...p} />))}
                </div>
            </div>
            <div className="flex flex-col">
                {/* product details box */}
                <section className="border-b-1 border-[#ECECEC] w-[300px] h-[49px] after:content-[''] after:block after:relative after:mt-[19px] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] ">
                    {/* title container */}
                    <h3 className="font-bold text-2xl leading-7 tracking-normal align-middle text-[#253D4E] font-quicksand ">Trending Products</h3>
                </section>
                <div className="flex flex-col mt-[30px] justify-between h-[70vh] w-[90%]">
                    {/* product card */}
                    {trendingproducts.map((p) => (<ProductCardUI key={p.id} cardtype={"D"} {...p} />))}
                </div>
            </div>
            <div className="flex flex-col">
                {/* product details box */}
                <section className="border-b-1 border-[#ECECEC] w-[300px] h-[49px] after:content-[''] after:block after:relative after:mt-[19px] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] ">
                    {/* title container */}
                    <h3 className="font-bold text-2xl leading-7 tracking-normal align-middle text-[#253D4E] font-quicksand ">Recently added</h3>
                </section>
                <div className="flex flex-col mt-[30px] justify-between h-[70vh] w-[90%]">
                    {/* product card */}
                    {recentalyadded.map((p) => (<ProductCardUI key={p.id} cardtype={"D"} {...p} />))}
                </div>
            </div>
            <div className="flex flex-col">
                {/* product details box */}
                <section className="border-b-1 border-[#ECECEC] w-[300px] h-[49px] after:content-[''] after:block after:relative after:mt-[19px] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] ">
                    {/* title container */}
                    <h3 className="font-bold text-2xl leading-7 tracking-normal align-middle text-[#253D4E] font-quicksand ">Top Rated</h3>
                </section>
                <div className="flex flex-col mt-[30px] justify-between h-[70vh] w-[90%]">
                    {/* product card */}
                    {toprated.map((p) => (<ProductCardUI key={p.id} cardtype={"D"} {...p} />))}
                </div>
            </div>
        </div>
    )
}