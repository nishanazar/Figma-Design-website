
interface datatype {
  bgColor: string;
  textColor: string
   h2: string;
   p: string;
   btnText : string;
   icon: React.ReactNode;
   
}
const Hero = (props: datatype) =>  {
return (
  <>
      <div className={`w-[1350px] h-[430px] top-[92px] left-[1px] py-[50px] px-[220px] mb-14 bg-${props.bgColor} flex`}>
      <div className={`w-[656px] h-[361px]  text-${props.textColor}`}>
      <h2 className=" text-[37px] font-bold leading-[45.45px] tracking-[-2%] mt-[70px]">{props.h2}</h2>
      <p className="text-[10px] mt-[15px] mb-[30px]">{props.p}</p>
     
      <button className="w-[159px] h-[40px] text-[13px] text-white py-2 px-2 rounded-[6px] bg-[#4F9CF9]">
      <div className="flex ">   
      {props.btnText}
      {props.icon}
      </div>
      </button>
      </div>
      <div className="w-[824px] h-[320px] bg-[#C4DEFD] gap-4px ml-5"></div>
      </div>
    </>
    )}

export default Hero