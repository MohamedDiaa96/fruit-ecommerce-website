'use client'
import React from "react"
import Homeheader from "./HomeHeader/HomeHeader"
import Hero from "./Hero/Hero"
import PopularProducts from "./Popular Products/PopularProducts"
export default function Home(){
    return(
        <div>
           <Homeheader></Homeheader>
           <Hero></Hero>
           <PopularProducts></PopularProducts>
        </div>
    )
}