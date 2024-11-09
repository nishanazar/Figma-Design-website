


import { FaArrowRight } from "react-icons/fa"
import Botton from "../components/Botton"



export default function Work (){
    return (
        
         <div className="w-[1350px] h-[430px] top-[92px] left-[1px]  px-[220px]  flex">
        
      <div className="w-[824px] h-[320px] bg-[#C4DEFD] gap-4px ml-5"></div>
      
          <div className="w-[556px] h-[361px] ml-[60px]" >
          <h2 className=" text-[35px] font-bold leading-[40.45px] tracking-[-2%] mt-[70px]">Customise it
          to your needs</h2>
          <p className="text-[10px] mt-[15px] mb-[40px]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
    
         <Botton btnText={"Let’s Go"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-4"/>}/>
               
                </div>
                </div>
                
                )

    
        }
    
   