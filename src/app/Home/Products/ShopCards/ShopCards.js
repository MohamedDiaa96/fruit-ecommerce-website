'use client'
import { productdata } from "@/app/components/data/ProductData";
import ProductCardUI from "@/app/components/Ui/ProductCardUI";
import { FilterContext } from "@/context/filtercontext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function ShopCards() {
    const { slicedproducts, filter, setfilter, isfiltercheckboxtextchecked, setisfiltercheckboxtextchecked, filtercheckboxtexthandle } = useContext(FilterContext);

    // قسم المنتجات حسب الـ id
    const productsAfter33 = filter.filter(p => p.id >= 33);
    const productsBefore33 = filter.filter(p => p.id < 33);

    // عدد العناصر في الصفحة الواحدة
    const itemsPerPage = 9;

    // الصفحة الحالية
    const [currentPage, setCurrentPage] = useState(1);

    // لو الصفحة الأولى → استخدم after33
    // لو غيرها → استخدم before33
    const dataToDisplay = currentPage === 1 ? productsAfter33 : productsBefore33;

    // حساب عدد الصفحات لباقي المنتجات (قبل 33)
    const totalPagesForBefore = Math.ceil(productsBefore33.length / itemsPerPage);

    // عدد الصفحات الكلي = 1 (للصفحة الأولى) + باقي الصفحات
    const totalPages = 1 + totalPagesForBefore;

    // احسب البيانات اللي تتعرض في الصفحة الحالية
    const indexOfLastItem = currentPage === 1 ? itemsPerPage : (currentPage - 2) * itemsPerPage + itemsPerPage;
    const indexOfFirstItem = currentPage === 1 ? 0 : indexOfLastItem - itemsPerPage;

    const currentItems =
        currentPage === 1
            ? dataToDisplay.slice(0, itemsPerPage)
            : productsBefore33.slice(indexOfFirstItem, indexOfLastItem);

    // تغيير الصفحة
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    }
    const [selectedsortoption, setselectedsortoption] = useState("Featured")
    const sortingooptions = ["Featured", "A-Z index", "Z-A index"]
    const [sortingdropdownmenu, setsortingdropdownmenu] = useState(false)
    const [sortingdisplaybutton, setsortingdisplaybutton] = useState(false)
    const [sortedItems, setSortedItems] = useState(currentItems);
    useEffect(() => {
        let sorted = [...currentItems];

        if (selectedsortoption === "A-Z index") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (selectedsortoption === "Z-A index") {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        }

        setSortedItems(sorted);
    }, [selectedsortoption, filter,currentPage]);

    return (
        <main >
            {/* Main shop cards container */}
            <section className="w-[966px] h-[47px] border border-[#E9E9E9] bg-[#F7F7F8] flex items-center justify-between px-1.5 sm:max-[704px]:w-[200px] sm:max-[704px]:mx-5 sm:max-[1385px]:w-full">
                {/* the product sorting header */}
                <div className="flex items-center gap-[5px]">
                    {/* sorting product display buttons */}
                    <button onClick={() => { setsortingdisplaybutton(false) }} className={`${sortingdisplaybutton === false ? "bg-[#F53E32] w-[35px]  h-[35px] opacity-100 rounded-[5px]  cursor-pointer flex justify-center items-center border border-solid border-[#E9E9E9]" : "bg-[#FFFFFF] w-[35px]  h-[35px] opacity-100 rounded-[5px]  cursor-pointer flex justify-center items-center border border-solid border-[#E9E9E9]"}`}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.16667 5.83333H5.83333V9.16667H9.16667V5.83333ZM10.8333 5.83333V9.16667H13.3333V5.83333H10.8333ZM9.16667 13.3333V10.8333H5.83333V13.3333H9.16667ZM10.8333 13.3333H13.3333V10.8333H10.8333V13.3333ZM9.16667 1.66667H5.83333V4.16667H9.16667V1.66667ZM10.8333 1.66667V4.16667H13.3333V1.66667H10.8333ZM4.16667 5.83333H1.66667V9.16667H4.16667V5.83333ZM4.16667 13.3333V10.8333H1.66667V13.3333H4.16667ZM4.16667 1.66667H1.66667V4.16667H4.16667V1.66667ZM0.833333 -9.53674e-07H14.1667C14.4 -9.53674e-07 14.5972 0.080555 14.7583 0.241666C14.9194 0.402777 15 0.599999 15 0.833333V14.1667C15 14.4 14.9194 14.5972 14.7583 14.7583C14.5972 14.9194 14.4 15 14.1667 15H0.833333C0.6 15 0.402778 14.9194 0.241667 14.7583C0.0805556 14.5972 0 14.4 0 14.1667V0.833333C0 0.599999 0.0805556 0.402777 0.241667 0.241666C0.402778 0.080555 0.6 -9.53674e-07 0.833333 -9.53674e-07Z" fill={`${sortingdisplaybutton === false ? "white" : "black"}`} />
                        </svg>
                    </button>
                    <button onClick={() => { setsortingdisplaybutton(!sortingdisplaybutton) }} className={`${sortingdisplaybutton === true ? "bg-[#F53E32] w-[35px] h-[35px] opacity-100 rounded-[5px]  cursor-pointer flex justify-center items-center border border-solid border-[#E9E9E9]" : "bg-[#FFFFFF] w-[35px] h-[35px] opacity-100 rounded-[5px]  cursor-pointer flex justify-center items-center border border-solid border-[#E9E9E9]"} `}>
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66667 9.53674e-06H15V1.66668H6.66667V9.53674e-06ZM6.66667 3.33334H11.6667V5.00001H6.66667V3.33334ZM6.66667 8.33334H15V10H6.66667V8.33334ZM6.66667 11.6667H11.6667V13.3333H6.66667V11.6667ZM0 9.53674e-06H5V5.00001H0V9.53674e-06ZM1.66667 1.66668V3.33334H3.33333V1.66668H1.66667ZM0 8.33334H5V13.3333H0V8.33334ZM1.66667 10V11.6667H3.33333V10H1.66667Z" fill={`${sortingdisplaybutton === true ? "white" : "black"}`} />
                        </svg>
                    </button>

                </div>
                <div className="flex items-center">
                    {/* sorting products button */}
                    <div className="w-[182.44000244140625px] h-[35px] opacity-100 rounded-[5px] bg-[#FFFFFF] border border-solid border-[#E9E9E9] flex items-center justify-center">
                        <span className="flex items-center font-poppins font-normal text-[15px] leading-[18px] tracking-[0%] align-middle text-[#7A7A7A] gap-2">
                            Sort By : <button onClick={() => { setsortingdropdownmenu(!sortingdropdownmenu) }} className={`cursor-pointer font-poppins font-normal text-[15px] leading-[18px] tracking-[0%] align-middle text-[#7A7A7A] flex`}>{selectedsortoption}</button>
                            <Image className={`ml-1 ${sortingdropdownmenu === true ? "rotate-180 transition-all duration-300" : "rotate-0 transition-all duration-300"}`} alt="arrow" src={"/material-photos/Productpage/ShopCards/arrow.svg"} width={10} height={10}></Image>
                            <div className={`${sortingdropdownmenu === true ? "z-20 shadow-xl transform transition-all duration-300 scale-y-100 visible max-h-fit  origin-top" : "transform transition-all scale-y-0 duration-300 invisible  origin-top"} overflow-hidden absolute mt-28 ml-13 rounded-[10px] w-[100px] h-20 bg-white border border-[#E9E9E9]  `}>
                                {sortingooptions.map((s, index) => (<button key={index} onClick={() => { setselectedsortoption(s); setsortingdropdownmenu(false) }} className="flex py-1 flex-col items-center w-full border cursor-pointer hover:text-white hover:bg-[#F53E32]">{s}</button>
                                ))}
                            </div>
                        </span>
                    </div>
                </div>
            </section>


  <section className="flex gap-6 flex-wrap mt-5 sm:max-xl:justify-center">
                {sortedItems.map((p) => (
                    <div key={p.id}>
                        <ProductCardUI cardtype={sortingdisplaybutton ? "D" : "E"} {...p} />
                    </div>
                ))}


                <div className="flex justify-center w-[90%] mt-8 sm:max-xl:mr-10 sm:max-xl:justify-start">
                    {/* pagination */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-[91px]  h-[38px] border border-[#E9E9E9] bg-[#F7F7F8] text-[#777] hover:bg-[#F53E32] hover:text-white transition-all duration-200 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-[35px] h-[38px] border border-[#E9E9E9] transition-all duration-200 ${currentPage === index + 1
                                ? "bg-[#F53E32] text-white border-[#F53E32] cursor-pointer"
                                : "bg-[#F7F7F8] text-[#777] hover:bg-[#F53E32] cursor-pointer hover:text-white hover:border-[#F53E32]"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-[60px] h-[38px] border border-[#E9E9E9] bg-[#F7F7F8] text-[#777] hover:bg-[#F53E32] hover:text-white transition-all duration-200 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        Next
                    </button>
                </div>
            </section>
        </main>
    )
}