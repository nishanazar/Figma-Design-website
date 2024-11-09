import Image from "next/image"
import logo from "../assets/logo.png"
export default function Footer(){
    return(
        <div>
        <div className="w-[1350px] h-[330px] bg-[#043873] text-white" >

        <div className="flex">
            {/* 1 */}
         <div className=" h-[260px] w-[450px] py-[70px] pl-[150px]">
        <Image src={logo} alt="footer"/>
        <p className="mt-5 text-[14px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div> 
              {/* 2 */}
            <div className="h-[260px] w-[300px] py-[70px] pl-[50px] ">
                <h2 className="font-bold pb-2">Products</h2>
                <ul className="space-y-1">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
                </ul>
            </div>
            {/* 3 */}

            <div className=" h-[260px] w-[300px] py-[70px]">
                <h2 className="font-bold pb-2">Resources</h2>
                <ul className="space-y-1">
                <li>Blog</li>
                <li>Guides & tutories</li>
                <li>Help center</li>
                </ul>
            </div>

    {/* 4 */}
            <div className="h-[260px] w-[300px] py-[70px]">
                <h2 className="font-bold pb-2">Company</h2>
                <ul className="space-y-1">
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
                </ul>
            </div>
            </div>
          
     
        <div className="h-2 w-[950px] border-b-2 border-[#2E4E73] ml-[120px]">
  
        </div>
        <h4 className="text-center font-bold text-[15px] leading-[20px] mt-6">©2021 Whitepace LLC.</h4>

</div>
</div>
    )
}