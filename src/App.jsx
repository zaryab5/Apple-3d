// import Features from "./components/Features"
// import Footer from "./components/Footer"
// import Hero from "./components/Hero"
// import Highlights from "./components/Highlights"
// import HowItWorks from "./components/HowItWorks"
// import Model from "./components/Model"
// import NavBar from "./components/NavBar"

import { lazy } from "react"

const Features = lazy(()=> import("./components/Features"));
const Footer = lazy(()=> import("./components/Footer"));
const Hero = lazy(()=> import("./components/Hero"));
const Highlights = lazy(()=> import("./components/Highlights"));
const HowItWorks = lazy(()=> import("./components/HowItWorks"));
const Model = lazy(()=> import("./components/Model"));
const NavBar = lazy(()=> import("./components/NavBar"));

const App=()=>{
  
  return (
    <main>
      <NavBar/>
      <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowItWorks/>
    <Footer/>
    </main>
  )
}

export default App
