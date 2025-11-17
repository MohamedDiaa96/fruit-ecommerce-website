'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'

export default function Reroutepage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5) // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)

    // redirect when countdown reaches 0
    if (countdown === 0) {
      router.push("/Home/Login")
    }

    // cleanup interval
    return () => clearInterval(interval)
  }, [countdown, router])

  return (
    <div className="size-100 w-full gap-2 flex flex-col items-center justify-center">
      <h1 className="font-poppins text-green-600 text-3xl">Account Created Successfully</h1>
      <h1 className="font-lato text-gray-600 text-xl">
        Redirecting to Login Page in {countdown} second{countdown !== 1 ? "s" : ""}...
      </h1>
    </div>
  )
}
