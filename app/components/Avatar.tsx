'use client'

import Image from "next/image"

export default function Avatar() {
  return (
    <Image
      src="/images/placeholder.jpeg"
      width="30"
      height="30"
      alt="Avatar"
      className="rounded-full"
    /> 
  )
}
