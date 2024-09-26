import Image from "next/image"
import X from "../../public/icons/crossIcon"
import { FC } from "react";
import { ShortCartProps } from "@/interface/cart";



const ShortCartItem:FC<ShortCartProps> = ({ image, alt, name, price, quantity }) => {
  return (
    <div className='flex items-start justify-between gap-4'>
      <Image className='h-[80px] w-[80px]' src={image} alt={alt} />
      <div>
        <h4
          className={`cursor-pointer font-spartan text-[19px] font-light capitalize tracking-wider text-green hover:text-black`}
        >
          {name}
        </h4>
        <p className='text-[20px] font-light font-spartan  capitalize tracking-wider'>
          <span>{quantity}</span> <span className="text-sm">x</span> ${price}
        </p>
      </div>
      <button>
        <X />
      </button>
    </div>
  )
}

export default ShortCartItem
