'use client'
import React from "react"
import Homeheader from "./HomeHeader/HomeHeader"
import Hero from "./Hero/Hero"
import PopularProducts from "./PopularProducts/PopularProducts"
import Dailybestsellsproducts from "./DailyBestSellsProducts/DailyBestSellsProducts"
import Dealsofthedayproducts from "./DealSoftheDayProducts/DealSoftheDayProducts"
import Fourproductsections from "./fourproductsections/fourproductsections"
import Banner from "./banner/banner"
import Offerbanner from "./offerbanner/offerbanner"
export default function Home(){
    return(
        <div>
           <Homeheader></Homeheader>
           <Hero></Hero>
           <PopularProducts></PopularProducts>
           <Dailybestsellsproducts></Dailybestsellsproducts>
           <Dealsofthedayproducts></Dealsofthedayproducts>
           <Fourproductsections></Fourproductsections>
           <Banner></Banner>
           <Offerbanner></Offerbanner>
        </div>
    )
}