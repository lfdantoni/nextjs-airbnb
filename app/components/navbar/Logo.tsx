'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Logo() {
  const router = useRouter()
  
  return (
    <div
      className="hidden md:block cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src="/images/logo.png"
        width="100"
        height="100"
        alt="AirBnb"
      />
    </div>
  )
}