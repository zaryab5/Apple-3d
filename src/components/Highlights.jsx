import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"
import { ScrollTrigger } from "gsap/all"
import { animateWithGsap } from "../utils/animations"
gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
    useGSAP(()=>{
        // gsap.to("#title",{
        //     scrollTrigger:{
        //       trigger:"#title",
        //       start:"top 90%",
        //       scrub:0.6,
        //     },
        //     opacity:1,
        //     y:0,
        // })
        // gsap.to(".link",{
        //     scrollTrigger:{
        //         trigger:".link",
        //         start:"top 90%",
        //         end:"top 50%",
        //         scrub:1,
        //       },
        //     opacity:1,
        //     y:0,
        //     duration:1,
        //     stagger:0.25
        // })

        animateWithGsap('#title', { y:0, opacity:1})
        animateWithGsap('.link', { y:0, opacity:1})
    })
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className=" screen-max-width">
            <div className=" mb-12 w-full items-end md:flex justify-between">
                <h1 id="title" className="section-heading">Get the highlights.</h1>
              <div className=" flex flex-wrap items-end gap-5">
               <p className="link">Watch the film
                <img src={watchImg} alt="watch" className=" ml-2 mt-[2.5px]" />
               </p>
               <p className="link">Watch the event
                <img src={rightImg} alt="watch" className=" ml-2 mt-[2.5px]" />
               </p>
              </div>
            </div>
            <VideoCarousel/>
        </div>
    </section>
    
  )
}

export default Highlights