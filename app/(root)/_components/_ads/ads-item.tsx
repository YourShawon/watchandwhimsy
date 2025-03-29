import React, { FC } from 'react';
import Timer from './timer';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AdsItemProps } from '@/interface/ads';

const AdsItem: FC<AdsItemProps> = ({bgImage, headerTop, headerPara, heading, newPrice, oldPrice, count1,count2,count3,count4 , diffColor=false}) => {
    return (
        <div style={{backgroundImage: `url(${bgImage})`}} className='p-[30px] sm:p-[50px] bg-left w-full flex flex-col flex-wrap bg-cover bg-no-repeat min-h-[420px] gap-5'>
            <div>
            <h2 className={`font-spartan font-semibold text-[26px] ${diffColor ? "text-light-green" : "text-green-0x"} text-green-0x mb-[5px]`}>{headerTop}</h2>
            <h5 className='font-normal text-sm text-black-1x font-spartan'>{headerPara}</h5>
            </div>
            <h6 className='font-spartan capitalize cursor-pointer text-black-1x text-lg font-normal'>{heading}</h6>
            <div className='flex items-center gap-[10px]'>
                <span className='font-spartan text-xl text-red-500 font-normal'>${newPrice}</span>
                <span className='font-spartan text-xl text-gray-1x line-through font-light'>${oldPrice}</span>
            </div>
            <div>
                <p className='font-normal text-green-7x mb-[5px]'>Hurry Up! Offer End In:</p>
                <div className='flex gap-2'>
                    <Timer timerCounter={count1} timerText={"days"}/>
                    <span className='translate-y-3'>:</span>
                    <Timer timerCounter={count2} timerText={"hours"}/>
                    <span className='translate-y-3'>:</span>
                    <Timer timerCounter={count3} timerText={"mins"}/>
                    <span className='translate-y-3'>:</span>
                    <Timer timerCounter={count4} timerText={"sec"}/>
                </div>
                <button className='text-green-0x font-bold cursor-pointer text-sm flex gap-1 items-center py-[10px] px-6 border-2 border-green-0x rounded-sm mt-5 transition duration-200 hover:translate-y-[-4px] group'>Shop Now <span className='group-hover:translate-x-2 transition duration-400 ease-in-out' ><HiOutlineArrowNarrowRight /></span></button>
            </div>
        </div>
    );
};

export default AdsItem;