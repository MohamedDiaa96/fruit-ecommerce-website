'use client'
import React, { useContext, useState } from "react";
import { productdata } from "../data/ProductData";
import { FilterContext } from "@/context/filtercontext";
import { Slider } from "antd";

export default function FilterUI() {


    const {
        isFruit, setIsFruit,
        isCoffee, setIsCoffee,
        isSnack, setIsSnack,
        isBlue, setIsBlue,
        isYellow, setIsYellow,
        isRed, setIsRed,
        priceRange, setPriceRange,
        applyPriceFilter,
        isWeight500gram, setisWeight500gram,
        isWeight1kg, setisWeight1kg,
        isWeight5Kg, setisWeight5Kg,
        isproducttagveg, setisproducttagveg,
        isproducttagjui, setisproducttagjui,
        isproducttagfood, setisproducttagfood,
        isproducttagdry, setisproducttagdry
    } = useContext(FilterContext)

    return (
        <main className="w-[306px] h-[969.969970703125px] rounded-[5px] border border-[#E9E9E9] bg-[#F7F7F8] sm:max-xl:w-full">
            {/* FilterUI  */}
            <section className="w-full">
                {/* First Product Category section */}
                <div className="w-[256px] h-[36.59000015258789px] [border-bottom:1px_solid_#E9E9E9] m-[25px]">
                    {/* section title */}
                    <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[25.6px] tracking-[0.48px] align-middle capitalize">Product Category</h1>
                </div>
                <div className="m-[25px] flex flex-col gap-[15px] ">
                    {/* filter product checkboxes container */}
                    <div className="flex gap-[78px] items-center">
                        {/* checkbox text and number */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox text */}
                            <input checked={isFruit} onChange={() => setIsFruit(!isFruit)} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercheckbox`} />
                            <label htmlFor={`filtercheckbox`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Juice & Drinks</label>
                        </div>
                        <span className="font-poppins text-[#7A7A7A] font-normal text-[12px] leading-[18px] tracking-[0.48px] align-middle">[20]</span>
                    </div>

                    <div className="flex gap-[95px] items-center">
                        {/* checkbox text and number */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox text */}
                            <input checked={isCoffee} onChange={() => setIsCoffee(!isCoffee)} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercheckbox2`} />
                            <label htmlFor={`filtercheckbox2`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Dairy & Milk</label>
                        </div>
                        <span className="font-poppins text-[#7A7A7A] font-normal text-[12px] leading-[18px] tracking-[0.48px] align-middle">[54]</span>
                    </div>

                    <div className="flex gap-[76px] items-center">
                        {/* checkbox text and number */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox text */}
                            <input type="checkbox" checked={isSnack} onChange={() => setIsSnack(!isSnack)} className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercheckbox3`} />
                            <label htmlFor={`filtercheckbox3`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Snack & Spice</label>
                        </div>
                        <span className="font-poppins text-[#7A7A7A] font-normal text-[12px] leading-[18px] tracking-[0.48px] align-middle">[64]</span>
                    </div>
                </div>
            </section>
            <section className="w-full">
                {/* Filter By Price section */}
                <div className="w-[256px] h-[36.59000015258789px] [border-bottom:1px_solid_#E9E9E9] m-[25px]">
                    {/* section title */}
                    <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[25.6px] tracking-[0.48px] align-middle capitalize">Filter By Price</h1>
                </div>
                <div className="mx-[25px]">

                    <Slider range onChange={setPriceRange} trackStyle={[{ backgroundColor: "#F53E32" }]} className="w-[80%]" handleStyle={[{ backgroundColor: "#F53E32" }, { borderColor: "#F53E32" },]}
                        min={20} max={300} defaultValue={priceRange}

                    />
                    {/* price label */}
                    <div className="font-poppins font-bold text-[15px]  leading-[18px] tracking-[0.48px] align-middle">
                        Price : <span className="font-poppins text-[#7A7A7A] font-bold text-[15px] leading-[18px] tracking-[0%] align-middle">${priceRange[0]} – ${priceRange[1]}</span>
                    </div>
                </div>
                <div>
                    {/* price filter button */}
                    <button onClick={applyPriceFilter} className="relative group overflow-hidden cursor-pointer w-[80.2300033569336px] h-10 rounded-[5px] border border-[#64B496] bg-[#F53E32] flex items-center justify-center m-[25px]">
                        <div className="absolute inset-0 duration-300 transition-all group-hover:bg-[#0000003d] "></div>
                        <span className="font-manrope absolute z-20 text-[#FFFFFF] font-bold text-[14px] leading-[16.8px] tracking-[0%] text-center align-middle capitalize">Filter</span></button>
                </div>
            </section>
            <section className="w-full">
                {/* Second Product Category section */}
                <div className="w-[256px] h-[36.59000015258789px] [border-bottom:1px_solid_#E9E9E9] m-[25px]">
                    {/* section title */}
                    <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[25.6px] tracking-[0.48px] align-middle capitalize">Product Category</h1>
                </div>
                <div className="m-[25px] flex flex-col gap-[15px]   ">
                    {/* filter product checkboxes container */}
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and color */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isBlue} onChange={() => { setIsBlue(!isBlue) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercolor`} />
                            <label htmlFor={`filtercolor`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Blue</label>
                        </div>
                        <div className="bg-[#6C9EFF] w-5 h-5 opacity-100 rounded-[5px]"></div>
                    </div>
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and color */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isYellow} onChange={() => { setIsYellow(!isYellow) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercolor2`} />
                            <label htmlFor={`filtercolor2`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Yellow</label>
                        </div>
                        <div className="bg-[#DEDE44] w-5 h-5 opacity-100 rounded-[5px]"></div>
                    </div>
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and color */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isRed} onChange={() => { setIsRed(!isRed) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filtercolor3`} />
                            <label htmlFor={`filtercolor3`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >Red</label>
                        </div>
                        <div className="bg-[#FB5555] w-5 h-5 opacity-100 rounded-[5px]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                {/* Weight section */}
                <div className="w-[256px] h-[36.59000015258789px] [border-bottom:1px_solid_#E9E9E9] m-[25px]">
                    {/* section title */}
                    <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[25.6px] tracking-[0.48px] align-middle capitalize">Weight</h1>
                </div>
                <div className="m-[25px] flex flex-col gap-[15px]   ">
                    {/* filter product checkboxes container */}
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and weight */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isWeight500gram} onChange={() => { setisWeight500gram(!isWeight500gram) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filterweight`} />
                            <label htmlFor={`filterweight`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >500 grams pack</label>
                        </div>
                    </div>
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and weight */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isWeight1kg} onChange={() => { setisWeight1kg(!isWeight1kg) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filterweight2`} />
                            <label htmlFor={`filterweight2`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >1 Kg pack</label>
                        </div>

                    </div>
                    <div className="flex gap-[95px] items-center justify-between">
                        {/* checkbox text and weight */}
                        <div className="flex gap-2.5 items-center" >
                            {/* checkbox color */}
                            <input checked={isWeight5Kg} onChange={() => { setisWeight5Kg(!isWeight5Kg) }} type="checkbox" className="accent-[#F53E32]  w-[18px] h-[18px] " id={`filterweight3`} />
                            <label htmlFor={`filterweight3`} className="font-poppins font-normal text-[#7A7A7A] text-[14px] leading-[21px] tracking-[0.48px] align-middle capitalize" >5 Kg Pack</label>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                {/* Weight section */}
                <div className="w-[256px] h-[36.59000015258789px] [border-bottom:1px_solid_#E9E9E9] m-[25px]">
                    {/* section title */}
                    <h1 className="font-poppins text-[#2B2B2D] font-medium text-[16px] leading-[25.6px] tracking-[0.48px] align-middle capitalize">Products Tages</h1>
                </div>
                <div className="flex flex-col gap-2.5">
                    {/* product tag buttons container */}
                    <div className="flex mx-[25px] gap-2.5">
                        {/*first product tag buttons set*/}
                        <button onClick={() => { setisproducttagveg(!isproducttagveg) }} className={`${!isproducttagveg ? " w-fit cursor-pointer px-4 h-8 opacity-100 rounded-[5px] border border-solid bg-[#FFFFFF] border-[#E9E9E9] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize text-[#7A7A7A]" : "w-fit cursor-pointer bg-[#F53E32] border-[#F53E32] text-white px-4 h-8 opacity-100 rounded-[5px] border border-solid  font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize"} `}>Vegetables</button>
                        <button onClick={() => { setisproducttagjui(!isproducttagjui) }}  className={`${!isproducttagjui ? " w-fit cursor-pointer px-4 h-8 opacity-100 rounded-[5px] border border-solid bg-[#FFFFFF] border-[#E9E9E9] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize text-[#7A7A7A]" : "w-fit cursor-pointer bg-[#F53E32] border-[#F53E32] text-white px-4 h-8 opacity-100 rounded-[5px] border border-solid  font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize"} `}>Juice</button>
                    </div>
                    <div className="flex mx-[25px] gap-2.5">
                        {/*second product tag buttons set*/}
                        <button onClick={() => { setisproducttagfood(!isproducttagfood) }} className={`${!isproducttagfood? " w-fit cursor-pointer px-4 h-8 opacity-100 rounded-[5px] border border-solid bg-[#FFFFFF] border-[#E9E9E9] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize text-[#7A7A7A]" : "w-fit cursor-pointer bg-[#F53E32] border-[#F53E32] text-white px-4 h-8 opacity-100 rounded-[5px] border border-solid  font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize"} `}>Food</button>
                        <button onClick={() => { setisproducttagdry(!isproducttagdry) }} className={`${!isproducttagdry ? " w-fit cursor-pointer px-4 h-8 opacity-100 rounded-[5px] border border-solid bg-[#FFFFFF] border-[#E9E9E9] font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize text-[#7A7A7A]" : "w-fit cursor-pointer bg-[#F53E32] border-[#F53E32] text-white px-4 h-8 opacity-100 rounded-[5px] border border-solid  font-poppins font-normal text-[14px] leading-[30px] tracking-[0.48px] align-middle capitalize"} `}>Dry Fruits</button>
                    </div>
                </div>
            </section>
        </main>
    )
}