interface btndata {
    btnText : string;
     icon: React.ReactNode;
}
  const Botton = (props: btndata) =>  {
  return (
    <>
     <button className="w-[159px] h-[40px] text-[14px] text-white py-2 px-8 rounded-[6px] bg-[#4F9CF9]">
      <div className="flex">   
      {props.btnText}
      {props.icon}
      </div>
      </button>
    </>
  )
}
export default Botton