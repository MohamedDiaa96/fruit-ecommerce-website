export default function OrangeBannerUI({Title,currentpath}){
    return(
        <div className="w-full h-[70px] bg-[#F53E32] ">
            {/* OrangeBanner container */}
            <div className="flex h-full mx-50 justify-between items-center">
                {/* Page Title and current path */}
                <h1 className="font-bold text-lg leading-5 align-middle font-manrope tracking-[0.48px] text-[#FFFFFF]">{Title}</h1>
                <h1 className="font-medium text-sm leading-4 align-middle capitalize font-poppins tracking-[0.48px] text-[#FFFFFF]">{currentpath}</h1>
            </div>
        </div>
    )
}