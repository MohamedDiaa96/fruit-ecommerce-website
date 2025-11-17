'use client'

import { createContext, useEffect, useState } from "react"

export const AccountContext = createContext()

export function AccountProvider({ children }) {

    const [accountdata, setaccountdata] = useState([])

    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [address, setaddress] = useState()
    const [postcode, setpostcode] = useState()


    const accountdataarray = (prev) => {
        if (firstname?.length >= 3 &&
            lastname?.length >= 3 &&
            email.includes("@") && email.includes(".com") &&
            phone?.length === 11 &&
            password?.length >= 8 && password === confirmpassword &&
            address?.length > 0
        ) {
            setaccountdata([...prev, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phonenumber: Number(phone),
                password: password,
                confirmpassword: confirmpassword,
                address: address,
                postcode: Number(postcode)
            }])



        } else {
            return prev
        }
    }
    useEffect(() => {
        const savedaccountdata = localStorage.getItem("accountdata")
        if (savedaccountdata) {
            setaccountdata(JSON.parse(savedaccountdata))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("accountdata", JSON.stringify(accountdata))
    }, [accountdata])


    useEffect(() => {
        console.log(firstname)
        console.log(address)
        console.log(email)
        console.log(accountdata)

    }, [firstname, accountdata, address, email])
    return (
        <AccountContext.Provider value={{
            accountdata, setaccountdata,
            accountdataarray,
            firstname, setfirstname,
            lastname, setlastname,
            email, setemail,
            phone, setphone,
            password, setpassword,
            confirmpassword, setconfirmpassword,
            address, setaddress,
            postcode, setpostcode
        }}>
            {children}
        </AccountContext.Provider>
    )
}