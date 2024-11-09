import Image from "next/image"
import image from "../assets/work.png"

import { FaArrowRight } from "react-icons/fa"
import Botton from "../components/Botton"



export default function Work (){
    return (
         
         <div className="w-[1350px] h-[430px] top-[92px] left-[1px]  px-[220px] bg flex">
          <Image className="w-[424px] h-[320px]  gap-4px" src={image} alt="pic"/>
          <div className="w-[556px] h-[361px] ml-[60px]" >
          <h2 className=" text-[35px] font-bold leading-[40.45px] tracking-[-2%] mt-[70px]">Work together</h2>
          <p className="text-[10px] mt-[15px] mb-[40px]">With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
          </p>
    
         <Botton btnText={"Try it now"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-4"/>}/>
               
                </div>
                <div/>
                </div>
        
        )

    
        }
    
   