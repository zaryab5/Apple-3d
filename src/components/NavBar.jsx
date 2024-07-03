import { appleImg,searchImg,bagImg } from "../utils"
import { navLists } from "../constants"
import { useEffect, useState } from "react";
const NavBar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const triggerPoint = 650;
    
          if (scrollTop > triggerPoint) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <header className={` ${isFixed? "fixed" : " "} transition-all duration-75 bg-black z-20 top-0 w-full py-5 sm:px-10 px-5 flex justify-between items-center`}>
        <nav className=" flex w-full screen-max-width">
            <img src={appleImg} alt="apple" width={14} />
            <div className=" flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav)=>(
                    <div className=" px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>
                        {nav}
                    </div>
                ))}
            </div>
            <div className=" flex items-baseline gap-7 cursor-pointer max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default NavBar