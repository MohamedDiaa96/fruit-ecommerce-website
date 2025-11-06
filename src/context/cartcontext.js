'use client'

import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export const CartContext = createContext()

export function CartProvider({ children }) {

    const [cartitems, setcartitems] = useState([])
    
    useEffect(() => {
        const savedcart = localStorage.getItem("cart");
        if (savedcart) {
            setcartitems(JSON.parse(savedcart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartitems));
    }, [cartitems]);
    
    const addtocart = (cartproductitem) => {
        setcartitems([...cartitems, cartproductitem])
        console.log([...cartitems, cartproductitem])
        const existingitem = cartitems.find((item) => item.id === cartproductitem.id)

        if (existingitem) {
            setcartitems(cartitems.map((item) => item.id === cartproductitem.id ? { ...item, quantity: item.quantity + 1 } : item))
            toast.success("Quantity updated 🛒")

        }
        else {
            setcartitems([...cartitems, { ...cartproductitem, quantity: 1 }])
            toast.success("Added to cart ✅");
        }

    }
    const increasequantity = (id) => { setcartitems(cartitems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)) }
    const decreasequantity = (id) => { setcartitems(cartitems.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)) }
    const removefromcart = (id) => { setcartitems(cartitems.filter((item) => item.id !== id)) }
    return (
        <CartContext.Provider value={{ cartitems, addtocart, increasequantity, decreasequantity, removefromcart }}>
            {children}
        </CartContext.Provider>
    )
}