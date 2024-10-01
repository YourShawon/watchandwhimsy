import { SellProps } from '@/interface/sell-item';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SellItem = ({item, index}: {item: SellProps, index: number}) => {
    return (
        <div className={`px-3 relative ${index == 2 && "md:hidden"} lg:inline-block`}>
            <img src={item.backgroundImage} alt={item.title} />
            <div className='py-5 px-[30px] absolute top-1/2 z-10 -translate-y-1/2 group/box'>
                <span className='text-gray-2x text-sm'>{item.title}</span>
                <h4 className='font-semibold mb-[15px] text-black-solid text-lg w-36 group-hover/box:translate-x-1 transition duration-200'>{item.text}</h4>
                <button className='text-sm text-green-0x hover:text-green-8x flex items-center gap-1 group/button'>{item.buttonText} <span className='group-hover/button:translate-x-1 transition duration-200'><HiOutlineArrowNarrowRight /></span> </button>
            </div>
        </div>
        
    );
};

export default SellItem;