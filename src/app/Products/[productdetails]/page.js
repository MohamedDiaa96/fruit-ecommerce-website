'use client'
import { productdata } from '@/app/components/data/ProductData'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Productdetails() {
  const { productdetails } = useParams()
  const product = productdata.find((item) => item.id == productdetails)
  console.log(productdetails)
  return (
    <div>
      {/* product details container */}
      <div>
        {/* filterUI */}
      </div>
      <div>

      </div>
    </div>
  )
}

