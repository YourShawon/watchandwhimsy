"use client"
import Cart from "../icons/cart";
import LocationIcon from "../icons/locationIcon";
import Logo from "../icons/logo";
import MobileIcon from "../icons/mobileIcon";
import SearchIcon from "../icons/search";
import UserIcon from "../icons/userIcon";
import {useTypewriter} from "react-simple-typewriter"

const Navbar = () => {
  const [text] =  useTypewriter({
    words: ["Man", "Woman", "kids", "Couples", "Minimalist Watch", "Leather", "Metal","Smart Watch", "Digital Watch"],
    loop: 0,
    typeSpeed:50,
    deleteSpeed:40,
    delaySpeed:1000
  })
    return (
        <header>
          {/* header top wrapper */}
          <div className=" border-b-[3px] border-[#088178] border-solid">
          <div className="container">
            {/* header top */}
          <div className="flex items-center justify-between py-[10px]">
            {/* left side */}
              <div>
                <ul className="flex items-center gap-1">
                  <li className="flex items-center gap-1">
                  <MobileIcon/>
                  <span className="text-sm cursor-pointer">(+01) - 2345 - 6789</span>
                  </li>
                  <span className="text-[#dedfe2]">|</span>
                  
                  <li className="text-sm flex items-center gap-1">
                  <LocationIcon/>
                  <span className="text-sm cursor-pointer">Our Location</span>
                  
                  </li>
                </ul>
              </div>
              <div>
              <ul>
                  <li className="text-sm flex items-center gap-1">
                  <UserIcon/>
                  <span className="text-sm cursor-pointer">Log In/Sign Up</span>
                  
                  </li>
                </ul>
              </div>
          </div>
          </div>
          </div>
          {/* card middle */}

          <div className="container">
            <div className="py-9 flex justify-between items-center">
            <Logo/> 
            <div className="w-[800px]">
              <form>
                <div className="border border-[#dedfe2] flex items-center">
                  <span className="p-3"><SearchIcon/></span>
                
              <input className="rounded-lg  bg-transparent px-4 py-2 text-[#414648] focus:outline-none w-full" placeholder={`Search ${text}`} type="text" />
              </div>
              </form>
            </div>
            <div className="cursor-pointer"><Cart/></div>
            </div>
          </div>
          
        </header>
    );
};

export default Navbar;

   