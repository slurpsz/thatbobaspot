import React, { useState } from 'react'
import image from "../assets/B.png"
import { FaBars} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../index.css"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)
  return (
    <div>
      <div className="flex justify-between pr-4">
          <img src={image} alt="logo" style={{ width: 200 }} />
        <ul className="items-center uppercase hidden md:flex cursor-pointer text-sm">
          <li className="font-bold p-4">Home</li>
          <li className="font-bold p-4">Menu</li>
          <li className="font-bold p-4">About</li>
          <li className="font-bold p-4">Locations</li>
          <li className="font-bold p-4">Careers</li>
          <li className="font-bold p-4">Contact</li>
        </ul>

        {/* hamburger menu */}
        <div onClick={handleClick} className="flex pt-8 md:hidden z-10">
          {!nav ? <FaBars /> : <AiOutlineClose />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "fixed right-8 top-8 h-full border-l border-l-grass"
          }
        >
          <ul className={!nav ? "hidden" : "p-4 uppercase cursor-pointer"}>
            <li className="font-bold p-6 hover:text-sage">Home</li>
            <li className="font-bold p-6">Menu</li>
            <li className="font-bold p-6">About</li>
            <li className="font-bold p-6">Locations</li>
            <li className="font-bold p-6">Careers</li>
            <li className="font-bold p-6">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar