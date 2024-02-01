import React from "react"
import MenuItem from "./MenuItem"
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";

const Header = () => {
  return (
    <div className="mx-auto p-3 max-w-6xl flex justify-between items-center">
      <div className="flex gap-4">
        <MenuItem 
          title="home" 
          address="/"
          Icon={AiFillHome}
        />
        <MenuItem 
          title="about" 
          address="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>
      <div className="flex gap-1 items-center">
        <span className="rounded-lg py-1 px-2 bg-amber-500 text-2xl font-bold">IMDb</span>
        <span className="hidden sm:inline text-xl">Clone</span>
      </div>
    </div>
  )
}

export default Header