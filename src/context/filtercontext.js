'use client'
import { productdata } from "@/app/components/data/ProductData"
import { createContext, useEffect, useState } from "react"


export const FilterContext = createContext()


export const FilterProvider = ({ children }) => {


    const [filter, setfilter] = useState(productdata)

    // checkboxes
    const [isFruit, setIsFruit] = useState(false)
    const [isCoffee, setIsCoffee] = useState(false)
    const [isSnack, setIsSnack] = useState(false)
    const [isBlue, setIsBlue] = useState(false)
    const [isYellow, setIsYellow] = useState(false)
    const [isRed, setIsRed] = useState(false)
    const [isWeight500gram, setisWeight500gram] = useState(false)
    const [isWeight1kg, setisWeight1kg] = useState(false)
    const [isWeight5Kg, setisWeight5Kg] = useState(false)
    const [isproducttagveg, setisproducttagveg] = useState(false)
    const [isproducttagjui, setisproducttagjui] = useState(false)
    const [isproducttagfood, setisproducttagfood] = useState(false)
    const [isproducttagdry, setisproducttagdry] = useState(false)





    const [priceRange, setPriceRange] = useState([20, 300])

    // main filtering effect
    useEffect(() => {
        let filtered = productdata

        if (isFruit || isCoffee || isSnack) {
            filtered = filtered.filter(i =>
                (isFruit && i.category === "Fruits") ||
                (isCoffee && i.category === "Coffes" || i.category === "Cream") ||
                (isSnack && i.category === "Snacks")

            )
        }

        if (isBlue || isYellow || isRed) {
            filtered = filtered.filter(i =>
                (isBlue && i.color === "Blue") ||
                (isYellow && i.color === "Yellow") ||
                (isRed && i.color === "Red")

            )
        }

        if (isWeight500gram || isWeight1kg || isWeight5Kg) {
            filtered = filtered.filter(i =>
                (isWeight500gram && i.weight === "500 Grams") ||
                (isWeight1kg && i.weight === "1 Kg") ||
                (isWeight5Kg && i.weight === "5 Kg") 
        )
        }

        if (isproducttagveg || isproducttagjui || isproducttagfood || isproducttagdry) {
            filtered = filtered.filter(i =>
                (isproducttagveg && i.category === "Vegetables") ||
                (isproducttagjui && i.category === "Coffes") ||
                (isproducttagfood && i.category === "Hodo Foods") ||
                (isproducttagdry && i.category === "Fruits")
            );
        }





        setfilter(filtered)

        
    }, [isFruit, isCoffee, isSnack, isBlue, isYellow, isRed, isWeight500gram, isWeight1kg, isWeight5Kg, isproducttagveg, isproducttagjui, isproducttagfood, isproducttagdry])


    const applyPriceFilter = () => {
        const [min, max] = priceRange;
        const filtered = productdata.filter(i => i.discountedprice >= min && i.discountedprice <= max);
        setfilter(filtered);
    };

    return (
        <FilterContext.Provider
            value={{
                filter, setfilter,
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
                isproducttagdry, setisproducttagdry,
            }}>
            {children}
        </FilterContext.Provider>
    )
}
