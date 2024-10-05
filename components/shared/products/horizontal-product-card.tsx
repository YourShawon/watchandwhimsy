import Image from "next/image"
import RatingStar from "../rating-star"

const HorizontalProductCard = () => {
  return (
    <div className="w-full">
      <div className="h-full flex items-center rounded-lg">
        <Image 
          src="/watch1/img1.jpg"
          alt="Image of a product"
          width={500}
          height={500}
          className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0"
        />
        <div>
          <h6 className="text-[12px] leading-4 font-spartan font-spartanSemiBold text-green-0x mb-1">Colorful Watch</h6>
          <p className="leading-6 text-green-7x">${25}</p>
          <RatingStar value={4}/>
        </div>
      </div>
    </div>
  )
}

export default HorizontalProductCard