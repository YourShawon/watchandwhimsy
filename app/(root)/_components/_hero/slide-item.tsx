import { SliderItemProps } from "@/interface/slider";
import { FC } from "react";

const SlideItem: FC<SliderItemProps> = ({item}) => {
    return (
        <>
            <div className='container lg:pt-[100px] lg:pl-[350px] pt-20 flex items-start sm:justify-between'>
          <div className='w-full sm:w-1/2 text-center'>
            <h5 className='font-spartan text-base lg:text-lg font-semibold text-black-solid'>
              {item.title}
            </h5>
            <h3 className='mt-1 font-spartan text-2xl sm:text-3xl lg:text-4xl font-bold text-black-solid'>
              {item.header1}
            </h3>
            <h3 className='font-spartan text-[28px] sm:text-4xl xl:text-[46px] font-black text-green-0x'>
            {item.header2}
            </h3>
            <p className='text-base xl:text-lg text-green-7x'>
            {item.description}
            </p>
            <button
            style={{ backgroundImage: `url(${item.buttonImage})` }}
              className={`mt-4 bg-no-repeat py-[14px] pr-20 ps-[65px] text-center font-spartan text-base sm:text-lg font-semibold text-green-0x`}
              
            >
              Shop Now
            </button>
          </div>
          <div className='hidden sm:block sm:w-1/2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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