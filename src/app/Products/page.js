import FilterUI from "../components/Ui/FilterUI";
import OrangeBannerUI from "../components/Ui/OrangeBannerUI";
import ShopCards from "./ShopCards/ShopCards";

export default function Products() {
    return (
        <main>
            <OrangeBannerUI Title={"Shop"} currentpath={"Home - Shop"} />
            <section className="py-[100px] px-20 flex gap-6">
                {/* product page content container */}
                <div>
                    {/* filterUI container */}
                    <FilterUI></FilterUI>
                </div>
                <div>
                    {/* ShopCards container */}
                    <ShopCards></ShopCards>
                </div>
            </section>
        </main>
    )
}