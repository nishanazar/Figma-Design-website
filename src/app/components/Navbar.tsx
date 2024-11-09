
 import Link from "next/link"
import Image from "next/image"
import logo from "@/app/assets/logo.png"
export default function Navbar(){
  return (
    
      <>
   <div className='w-[1350px] h-[92px] py-4 px-[150px] bg-[#043873] flex justify-between items-center'>
   <div className='w-[191px] h-[34px]'>
   <Image src={logo} alt='' />
   </div>
   <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
   <div className='w-[549px] h-[23px] ml-[100px] '>
   <ul className='flex flex-row gap-[32px]  text-white'>
   <li>Products</li>
   <li>Solutions</li>
   <li>Resources</li>
   <li>Pricing</li>
   </ul>
   </div>
   <div className='w-[126px] h-[60px]'>
   <button className='px-10 py-4 rounded-lg bg-[#FFE492]'>Login</button>
	</div>
    </div>
    </div>
		
		</>

  )
}

