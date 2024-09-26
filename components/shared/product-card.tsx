import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";


const ProductCard = ({ imgUrl, category, title, rating, price, prevPrice, addToCart, badge, variant }: {
  imgUrl: string;
  category?: string;
  title: string;
  rating?: number;
  price: number;
  prevPrice?: number;
  addToCart?: boolean;
  badge?: string;
  variant?: string;
}) => {
  return (
    <div className="border m-3 w-auto mb-[30px] relative border-[#cce7d0] rounded-[25px] overflow-hidden p-3">
      {/* Outermost div - only available on home page all products */}
      <div className={`flex gap-5 ${variant === "horizontal" ? `flex-row` : `flex-col`}`}>
        {/* Product wrapper - the classnames will be like this
         - for vertical product card - [ home page and new arrival it will be flex flex-col]
         - for horizontal product card - [ productDetails paeg and new product it will be flex]
         so the only class will be rendered conditionally "flex-col"
        */}
        <div className="relative bg-[#F1F1F1] flex items-center justify-center rounded-[25px] py-[10px] px-[12px]">
          {/* Product img wrapper */}
          <Image 
            src="/watch1/img1.jpg"
            alt="watch Image"
            width = {100}
            height={100}
            className="rounded-[25px] mix-blend-multiply object-cover"
          />
        </div>
        <div className="relative">
          {/* Product content wrapper */}
          <h2 className="text-[16px] text-[#1A1A1A] font-spartan font-spartanSemiBold leading-[19px]">
            {/* Product title */}
            Orient kamasu Mako ||| Red Dial Automatic Diver Watch
          </h2>
          <div className="pt-1">
            {/* product price */}
            <span className="text-[18px] font-bold text-[#088178]">$238.86</span>
            <span className="text-[14px] font-[400] text-[#90908e] m-[7px] line-through">$245.8</span>
          </div>
          <div className="absolute bottom-2 right-0">
            {/* add to cart btn */}
            <Button variant="outline" size="icon" className="rounded-full bg-[#e8f6ea] border border-[#cce7d0]">
              <ShoppingCartIcon className="h-4 w-4 text-[#088178]"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard