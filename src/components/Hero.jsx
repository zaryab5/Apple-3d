import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"
const Hero = () => {
    useGSAP(()=>{
        gsap.to("#hero",{
           opacity:1,
           delay:1.2
        });
        gsap.to("#cta",{
            opacity:1,
            y:-50,
            delay:1.5,
            
         })
    },[])

    const [vidSize,setVidSize]=useState(window.innerWidth<760?smallHeroVideo:heroVideo)
    const handleVideoSize=()=>{
    if(window.innerWidth<760){
       setVidSize(smallHeroVideo)
    }else{
        setVidSize(heroVideo)
    }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleVideoSize);

        return()=>{
            window.removeEventListener('resize',handleVideoSize);
        }
    })
  return (
    <section className=" w-full mt-[60px] min-h-[90vh]  bg-black relative">
        <div className=" h-5/6 w-full flex-center flex-col"></div>
        <p id="hero" className=" hero-title">iPhone 14</p>
        <div className=" md:w-10/12 w-9/12 mx-auto">
        <video className=" pointer-events-none" autoPlay muted playsInline={true} key={vidSize}>
            <source src={vidSize} type="video/mp4"/>
        </video>
        </div>
        <div id="cta" className=" flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className=" font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
    
  )
}

export default Hero