import { SliderItemProps } from "@/interface/slider";
import { FC } from "react";

const SlideItem: FC<SliderItemProps> = ({item}) => {
    return (
        <>
            <div className='container  pt-[100px] pl-[350px] flex items-start justify-between'>
          <div className='w-1/2'>
            <h5 className='font-spartan text-lg font-semibold text-[#222]'>
              {item.title}
            </h5>
            <h3 className='mt-1 font-spartan text-4xl font-bold text-[#222]'>
              {item.header1}
            </h3>
            <h3 className='font-spartan text-[46px] font-black text-green'>
            {item.header2}
            </h3>
            <p className='text-lg text-[#465b52]'>
            {item.description}
            </p>
            <button
            style={{ backgroundImage: `url(${item.buttonImage})` }}
              className={`mt-4 bg-no-repeat py-[14px] pr-20 ps-[65px] text-center font-spartan text-lg font-semibold text-green`}
              
            >
              Shop Now
            </button>
          </div>
          <div className='w-1/2'>
            <img
              src={item.image}
              alt='Slider image'
            />
          </div>
        </div>
        </>
    );
};

export default SlideItem;