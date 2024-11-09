
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Work from "./components/work";
import Customize from "./components/Customize";
import Yourwork from "./components/Yourwork";
import Sponsore from "./components/sponsore";
import Footer from "./components/Footer";



export default function Home ()  {
  return (
    <>
      <Navbar/>
      {/* Get more */}
      <Hero bgColor={"[#043873]"} textColor={"white"} h2={"Get More Done with whitepace"} p={"Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"} btnText={"Try Whitespace free"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-2"/>}/>

      {/* project */}
      <Hero bgColor={"[#ffffff]"} textColor={"black"} h2={"Project Management"} p={"Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."} btnText={"Get Started"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-4"/>}/>

      {/* Work together */}
      <Work/>

      {/* Use */}
      <Hero bgColor={"[#043873]"} textColor={"white"} h2={"Use as Extension"} p={"Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."} btnText={"Let’s Go"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-2"/>}/>

      {/* Customize */}
      <Customize/>

      {/* Your Work */}
      <Yourwork/>

      {/* Sponsore */}
      <Sponsore/>

      {/* Footer */}
      <Footer/>
  </>
  )
}

