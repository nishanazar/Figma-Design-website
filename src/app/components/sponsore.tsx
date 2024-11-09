import Image from "next/image"
import apple from "../assets/Apple.png"
import microsoft from "../assets/microsoft 1.png"
import slack from "../assets/Slack_Technologies_Logo 1.png"
import google from "../assets/Group 246.png"


export default function Sponsore (){
    return (
    <>
    <div className="w-[1350px] h-[250px] px-10 ">
    <h1 className="text-center font-bold text-[35px] mb-[50px]">Our sponsors</h1>
    <div className="text-[30px] flex justify-evenly top-[30px]">
    <Image src={apple} alt="Apple-icon" height={5} width={35}/>
    <Image src={microsoft} alt="microsoft-icon" height={10} width={150}/>
    <Image src={slack} alt="slack-icon" height={3} width={100}/>
    <Image src={google} alt="google-icon" height={5} width={100}/>
    </div>
    </div>
    </>
        
        )

    
        }
    