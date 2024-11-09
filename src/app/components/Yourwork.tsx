

import { FaArrowRight } from "react-icons/fa"
import Botton from "../components/Botton"



export default function YourWork (){
    return (
    <div className="w-[1350px] h-[280px] bg-[#043873] px-[220px] mb-[50px] text-[white] flex flex-col text-center">
    <h2 className=" text-[35px] font-bold leading-[40.45px] tracking-[-2%] mt-[70px]">Your work, everywhere you are</h2>
    <p className="text-[10px] mt-[15px] mb-[40px]">Access your notes from your computer, phone or
     tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. 
     The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also
     available!
    </p>
    
    
    <div>
    <Botton btnText={"Try Taskey"} icon={<FaArrowRight className="text-[10px] mt-[6px] ml-4"/>}/>
    </div>
    </div>
        
        )

    
        }
    