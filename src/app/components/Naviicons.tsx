"use client";

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import CartModal from "./CartModal";



const Naviicons = () => {
const[isprofileopen,setisprofileopen] = useState(false)
const[iscartopen,setiscartopen] = useState(false)
  
const toggleProfileDropdown=()=>{
  setisprofileopen(!isprofileopen)
}

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
    <Image
      src="/profile.png"
      alt=""
      width={22}
      height={22}
      className="cursor-pointer"
      onClick={toggleProfileDropdown}
    />

  {isprofileopen && (
    <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
        <Link href="/profile">Profile</Link>
        <div className="mt-2 cursor-pointer" >
            Logout
          </div>
      
    </div>
  )}

<Image
      src="/notification.png"
      alt=""
      width={22}
      height={22}
      className="cursor-pointer"
    />
     <Image
      src="/cart.png"
      alt=""
      width={22}
      height={22}
      className="cursor-pointer"
      onClick={()=>setiscartopen((prev)=>!(prev))}
    />
    <div className="absolute top-4 -right-4 w-6 h-4  rounded-full text-red text-sm flex items-center justify-center">
1
    </div>
    {iscartopen && <CartModal/>} 
    </div>
  )
}

export default Naviicons